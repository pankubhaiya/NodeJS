# Node.js Backend API for Managing Books

This is a Node.js backend API for managing books, built using Express and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on book data. Below, you'll find information on how to use the API, set it up locally, and details about the project's development.

## API Endpoints and Usage

- **Create a new book:**
  - Endpoint: `POST /api/addbook`
  - Usage: To create a new book, send a POST request to this endpoint with the book's details in the request body. The required fields are `title`, `author`, and `summary`. Example request:
    ```json
    {
      "title": "Sample Book",
      "author": "John Doe",
      "summary": "This is a sample book."
    }
    ```

- **Get a list of all books:**
  - Endpoint: `GET /api/getbook`
  - Usage: Send a GET request to this endpoint to retrieve a list of all books.

- **Get details of a specific book by its ID:**
  - Endpoint: `GET /api/books/:id`
  - Usage: Send a GET request to this endpoint, replacing `:id` with the book's unique ID, to retrieve details of a specific book.

- **Update a book's details:**
  - Endpoint: `PATCH /api/books/:id`
  - Usage: To update a book's details, send a PATCH request to this endpoint with the book's unique ID as part of the URL and the updated book details in the request body.

- **Delete a book:**
  - Endpoint: `DELETE /api/books/:id`
  - Usage: To delete a book, send a DELETE request to this endpoint, replacing `:id` with the book's unique ID.

## Setup and Run Locally

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and configure your MongoDB connection:

   ```env
   mongoURL=mongodb://localhost/bookstore
   PORT = YOUR_PORT_NO
   ```

4. Start the Node.js application:

   ```bash
   npm run server
   ```

5. The API will be available at `http://localhost:PORT.NO/api`.

## Assumptions and Decisions

- The project uses Express as the web framework for building the API.
- MongoDB is chosen as the database to store book data, and the connection is established using Mongoose.
- Basic input validation is in place to ensure required fields are provided during book creation.
- The project structure follows an MVC pattern to keep code organized and maintainable.

Feel free to extend and modify the project according to your specific needs and requirements.

## Dependencies

- Express: A web framework for building the API.
- Mongoose: An ODM library for MongoDB.
- dotenv: A library for loading environment variables from a .env file..


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.