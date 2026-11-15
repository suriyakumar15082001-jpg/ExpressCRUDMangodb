# Express CRUD MongoDB API

A REST API for creating, listing, updating, and deleting users with Express and MongoDB.

## Requirements

- Node.js and npm
- A MongoDB instance and its connection URI

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a `.env` file in the project root and set your MongoDB connection URI:

   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/expresscrud
   PORT=3000
   ```

   Replace the URI with your MongoDB connection string if your database is hosted elsewhere.

3. Start the server:

   ```sh
   npm start
   ```

The API is available at `http://localhost:3000`. The server connects to MongoDB before it starts listening.

## API endpoints

All endpoints are prefixed with `/api`.

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/getuser` | List users |
| `POST` | `/api/createuser` | Create a user |
| `PUT` | `/api/updateuser/:id` | Update a user by MongoDB ID |
| `DELETE` | `/api/deleteuser/:id` | Delete a user by MongoDB ID |

### User fields

The user model requires `name` (string), `email` (string), and `age` (number). Email addresses must be unique.

Example request body for creating a user:

```json
{
  "name": "Alex Smith",
  "email": "alex@example.com",
  "age": 30
}
```

Send the same JSON fields to update a user, using that user's MongoDB ID in the URL.
