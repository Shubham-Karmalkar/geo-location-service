export * from "./location.service";
import { simpleMongoLocaitonRepository } from "../repositories";
import { LocationService } from "./location.service";

export const locationService = new LocationService(simpleMongoLocaitonRepository);
