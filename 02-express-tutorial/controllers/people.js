const { people } = require("../data");

const getPeople = (req, res) => {
    res.json(people);
};

const addPerson = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }

    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
};

const getPerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const person = people.find(p => p.id === id);

    if (!person) {
        return res.status(404).json({ message: "Person not found" });
    }

    res.json(person);
};

const updatePerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const person = people.find(p => p.id === id);

    if (!person) {
        return res.status(404).json({ message: "Person not found" });
    }

    if (!req.body.name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }

    person.name = req.body.name;
    res.json({ success: true, data: person });
};

const deletePerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = people.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Person not found" });
    }

    people.splice(index, 1);
    res.json({ success: true, message: "Person deleted" });
};

module.exports = { getPeople, addPerson, getPerson, updatePerson, deletePerson };
