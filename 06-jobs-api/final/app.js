require('dotenv').config();
require('express-async-errors');

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// Swagger
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');
// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get('/', (req, res) => {
  res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

// Temporary endpoint to check Render IP address
app.get("/check-ip", async (req, res) => {
  try {
    const https = require("https");
    https.get("https://api.ipify.org?format=json", (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        const ipInfo = JSON.parse(data);
        res.json({ 
          renderOutboundIP: ipInfo.ip,
          message: "Add this IP to MongoDB Atlas Network Access" 
        });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Could not fetch IP" });
  }
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  // Start server immediately for IP check endpoint
  app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
  );
  
  // Try to connect to DB but don't block server startup
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.log('MongoDB connection failed:', error.message);
    console.log('Server running without database - only /check-ip endpoint will work');
  }
};

start();
