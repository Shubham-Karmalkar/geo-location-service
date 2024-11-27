import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { MongoDb } from "./database";
import { Database } from "./interfaces";
import routes from "./routes";
dotenv.config();

/**
 * Point data:
 *  1. create multiple points
 *  2. update multiple points
 *  3. get mutliple points
 *
 *
 * Polygon data:
 *  1. create multiple polygon data
 *  2. update multiple polygon data
 *  3. get multiple polygon data
 *
 */
const PORT = process.env.PORT || "3000";

const app = express();

app.use(express.json());

process.on("unhandledRejection", (error: Error) => {
    console.log("unhandledRejection: ", error);
    process.exit(1);
});

process.on("uncaughtException", (error) => {
    console.log("uncaughtException", error);
    process.exit(1);
});

app.listen(PORT, async () => {
    const db: Database = new MongoDb();
    const response = await db.connect();
    console.log(response);
    routes(app);
});
