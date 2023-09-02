# Node.js MongoDB RESTful API

This is a simple Node.js backend application that provides RESTful APIs for CRUD operations using MongoDB as the database.

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/rakesh-kumar-18/trikl-project.git
   ```
   
2. Navigate to the project directory:

   ```bash
   cd trikl-project
   ```
   
3. Install project dependencies:

   ```bash
   npm install
   ```
   
4. Start the MongoDB server. You can start it locally by running `mongod` in your terminal or you can use MongoDB atlas.

5. Create a `.env` file in the root directory of the project and add your MongoDB connection URL:

   ```env
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   ```
   
6. Start the API server:

   ```bash
   npm start
   ```
   
The server will run on port 3000 by default. You can change the port in the index.js file if needed.

## API Endpoints

- **GET /items**: Fetch all items.
- **POST /items**: Create a new item.
- **PUT /items/:id**: Update an existing item.
- **DELETE /items/:id**: Delete an item.
  
## Testing the APIs

You can use a tool like Postman to test the API endpoints or you can also use thunder client a light weight vscode extension.

## Using Thunder Client to Test the APIs

To test the API endpoints, you can use the Thunder Client extension for VSCode. Follow these steps:

1. **Install the Thunder Client extension** from the Visual Studio Code Marketplace.

2. **Open the `thunder-collection_REST API.json` file** included in this repository using VSCode.

3. In VSCode, **open the Thunder Client extension** and import the json file.

4. **Click the "Run Thunder Collection" button** to execute all the API requests in the collection. Ensure that your API server is running.
