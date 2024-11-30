# REST API with CRUD Operations in Node.js

A fully functional REST API built using Node.js and Express.js that provides CRUD (Create, Read, Update, Delete) operations for managing items. This project includes a responsive HTML frontend with Bootstrap for interacting with the API, allowing you to view, add, and delete items dynamically. The project uses an in-memory array as a temporary data store, making it lightweight and easy to set up.

## Features

- **Create**: Add a new item to the store through the API or the frontend.
- **Read**: Retrieve a list of all items or a specific item by ID.
- **Update**: Modify an existing item by ID using the API.
- **Delete**: Remove an item by ID through the API or the frontend.
- Responsive HTML interface for managing items.

## Technologies Used

- Node.js
- Express.js
- Bootstrap (frontend styling)
- Axios (for API interactions)
- CORS middleware (to enable cross-origin requests)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rest-api-nodejs.git
cd rest-api-nodejs
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the server
Run the Node.js server:
```bash
node index.js
```
This will start the server on http://localhost:3001.

4. View the Frontend
Open the index.html file in your browser via a local HTTP server:

Using Python:
```bash
python -m http.server 5500
```
Then open http://localhost:5500/index.html.

Using Node.js:
```bash
npx http-server -p 5500
```
Then open http://localhost:5500/index.html.

## API Endpoints
### POST /items
Create a new item.

Request body:

```json
{
  "name": "Item Name",
  "price": 100
}
```

Response:
```json
{
  "id": 123456789,
  "name": "Item Name",
  "price": 100
}
```

### GET /items
Get a list of all items.

Response:
```json
[
  {
    "id": 123456789,
    "name": "Item Name",
    "price": 100
  }
]
```

### GET /items/:id
Get a specific item by ID.

Response:
```json
{
  "id": 123456789,
  "name": "Item Name",
  "price": 100
}
```

### PUT /items/:id
Update an existing item by ID.

Request body:
```json
{
  "name": "Updated Item Name",
  "price": 150
}
```

Response:
```json
{
  "id": 123456789,
  "name": "Updated Item Name",
  "price": 150
}
```

### DELETE /items/:id
Delete an item by ID.

Response:
```json
204 No Content on successful deletion.
```

## Using the Frontend
**View Existing Items:**
    * Items are displayed in the "Items List" section when the page loads.
**Add an Item:**
    * Enter the name and price in the "Add Item" form.
    * Click "Add Item" to submit.
**Delete an Item:**
    * Click the "Delete" button next to an item in the list.

## Using the API Client

A separate file apiClient.js is included to interact with the API.

## Add a new item:

Modify the name and price parameters in the addItem function in apiClient.js.
Run the file:
```bash
node apiClient.js
```

## Delete an item:

Modify the id in the deleteItem function in apiClient.js.
Run the file: node apiClient.js

## Customization
Feel free to:

* Replace the in-memory data store with a database such as MongoDB, MySQL, or PostgreSQL.
* Enhance the frontend with additional features like edit functionality.
* Deploy the API and frontend using platforms like Heroku, Vercel, or AWS.
