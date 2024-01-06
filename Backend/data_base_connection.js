import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '../config/.env' });

const db_connection = async (db_url) => {
    try {
        await mongoose.connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DB CONNECTED!");
    } catch (err) {
        console.error("Error:", err);
    }
};

export { db_connection };
