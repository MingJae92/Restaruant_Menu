import express from "express";
import dotenv from "dotenv";
import { db_connection } from "./data_base_connection.js";

dotenv.config({ path: '../config/.env' });

const app = express();
const port = process.env.SERVER_PORT;

// Check if the port is defined
if (!port) {
    console.error("Server port is not defined in the .env file.");
    process.exit(1); // Exit the process
}

app.listen(port, () => {
    console.log(`Server connected to port ${port}`);
});

const db_url = process.env.MONGO_DB_URL;

// Check if the db_url is defined
if (!db_url) {
    console.error("MongoDB URL is not defined in the .env file.");
    process.exit(1); // Exit the process
}

db_connection(db_url);
