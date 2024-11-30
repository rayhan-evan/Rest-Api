const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// In-memory "database" (can replace with MongoDB, MySQL, etc.)
let items = [];

// CREATE: Add new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    if (!newItem.name || !newItem.price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }
    newItem.id = Date.now(); // Unique ID
    items.push(newItem);
    res.status(201).json(newItem);
});

// READ: Get all items
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// READ: Get single item by ID
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(item);
});

// UPDATE: Update an existing item by ID
app.put('/items/:id', (req, res) => {
    let item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }
    const { name, price } = req.body;
    if (name) item.name = name;
    if (price) item.price = price;
    res.status(200).json(item);
});

// DELETE: Delete an item by ID
app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Item not found' });
    }
    items.splice(index, 1);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});