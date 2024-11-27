import mongoose, { Document } from "mongoose";
import { DB_SCHEMA, LOCATION_CATEGORIES, SHAPE_TYPES } from "../constants/database";

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
        required: true,
    },
    updatedAt: {
        type: Number,
        required: true,
    },
    location: {
        type: { type: String, required: true },
        coordinates: { type: [mongoose.Schema.Types.Mixed], required: true },
    },
});

locationSchema.index({ location: "2dsphere" });
locationSchema.index({ ownerId: 1 });
locationSchema.index({ state: 1, city: 1 });
locationSchema.index({ type: 1 });

export interface ILocation {
    name: string;
    description: string;
    state: string;
    city: string;
    address: string;
    type: LOCATION_CATEGORIES;
    createdAt: number;
    updatedAt: number;
    location: {
        type: SHAPE_TYPES;
        coordinates: any[];
    };
}

export const Locations = mongoose.model<ILocation>(DB_SCHEMA.LOCATIONS, locationSchema);
