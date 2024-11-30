# REST API with CRUD Operations in Node.js

A simple REST API built using Node.js and Express.js that provides CRUD (Create, Read, Update, Delete) operations for managing items. This project uses an in-memory array as a temporary data store. A separate `apiClient.js` file allows you to interact with the API for adding and deleting items.

## Features

- **Create**: Add a new item to the store.
- **Read**: Retrieve a list of all items or a specific item by ID.
- **Update**: Modify an existing item by ID.
- **Delete**: Remove an item by ID.
  
## Technologies Used

- Node.js
- Express.js
- Axios (for interacting with the API)

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
This will start the server on http://localhost:3000.

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

204 No Content on successful deletion.

## Using the API Client

A separate file apiClient.js is included to interact with the API.

## Add a new item:

Modify the name and price parameters in the addItem function in apiClient.js.
Run the file: node apiClient.js

Delete an item:

Modify the id in the deleteItem function in apiClient.js.
Run the file: node apiClient.js

Customization
Feel free to modify the API, add features, or replace the in-memory database with a real database such as MongoDB, MySQL, or PostgreSQL.
