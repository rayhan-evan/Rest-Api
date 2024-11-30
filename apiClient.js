const axios = require('axios');

// Base URL of the API (assuming it's running locally)
const apiUrl = 'http://localhost:3001/items';

// Function to add a new item
async function addItem(name, price) {
    try {
        const response = await axios.post(apiUrl, { name, price });
        console.log('Item added:', response.data);
    } catch (error) {
        console.error('Error adding item:', error.response ? error.response.data : error.message);
    }
}

// Function to get all items
async function getItems() {
    try {
        const response = await axios.get(apiUrl);
        console.log('Items retrieved:', response.data);
    } catch (error) {
        console.error('Error retrieving items:', error.response ? error.response.data : error.message);
    }
}

// Function to get a specific item by ID
async function getItemById(id) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        console.log('Item retrieved:', response.data);
    } catch (error) {
        console.error('Error retrieving item:', error.response ? error.response.data : error.message);
    }
}

// Function to update an existing item by ID
async function updateItem(id, name, price) {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, { name, price });
        console.log('Item updated:', response.data);
    } catch (error) {
        console.error('Error updating item:', error.response ? error.response.data : error.message);
    }
}

// Function to delete an item by ID
async function deleteItem(id) {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        console.log('Item deleted:', response.status === 204 ? 'Success' : 'Failed');
    } catch (error) {
        console.error('Error deleting item:', error.response ? error.response.data : error.message);
    }
}

// Example usage: Add a new item
// addItem('Laptop', 1200);

// Example usage: Get all items
// getItems();

// Example usage: Get an item by ID (replace 1 with a valid item ID)
// getItemById(1);

// Example usage: Update an item (replace 1 with a valid item ID)
// updateItem(1, 'Updated Laptop', 1500);

// Example usage: Delete an item (replace 1 with a valid item ID)
// deleteItem(1);
