const express = require("express");
const router = express.Router();
const { addPerson, getPeople, getPerson, updatePerson, deletePerson } = require("../controllers/people.js");

// GET all people
router.get("/", getPeople);

// GET person by ID
router.get("/:id", getPerson);

// POST new person
router.post("/", addPerson);

// PUT update person
router.put("/:id", updatePerson);

// DELETE person
router.delete("/:id", deletePerson);

module.exports = router;
