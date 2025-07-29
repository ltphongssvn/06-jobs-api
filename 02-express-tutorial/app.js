const express = require('express');
const path = require('path');
const { products } = require('./data');
const peopleRouter = require('./routes/people');

const app = express();

// Logger middleware function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toISOString();
  console.log(`${method} ${url} - ${time}`);
  next();
};

// Body parsing middleware (needed for POST/PUT requests)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use logger for all routes
app.use(logger);

// 1. Serve static files from methods-public instead of public
app.use(express.static(path.join(__dirname, 'methods-public')));

// Mount the people router
app.use("/api/v1/people", peopleRouter);

// 2. Test endpoint
app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'It worked!' });
});

// 3. Get all products
app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

// 4. Get a product by ID
app.get('/api/v1/products/:productID', (req, res) => {
  const id = parseInt(req.params.productID, 10);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'That product was not found.' });
  }

  res.json(product);
});

// 5. Query route: filter by name (startswith) and limit results
app.get('/api/v1/query', (req, res) => {
  let { search, limit } = req.query;
  let filtered = [...products];

  if (search) {
    filtered = filtered.filter(p =>
        p.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (limit) {
    const num = parseInt(limit, 10);
    if (!isNaN(num) && num > 0) {
      filtered = filtered.slice(0, num);
    }
  }

  res.json(filtered);
});

// 6. Catch-all 404 JSON handler
app.all('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// 7. Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT);
});
