import mongoose from "mongoose";
import { Database } from "../interfaces";

//https://www.mongodb.com/docs/manual/geospatial-queries/

export class MongoDb implements Database {
    async connect(): Promise<string> {
        const databaseUrl = `${process.env.DB_URL}/${process.env.DB_NAME}`;
        const response = await mongoose.connect(databaseUrl);
        if (response) return "Connected to Mongodb";
        throw new Error("mongodb error");
    }
}
