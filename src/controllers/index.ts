import { locationService } from "../services";
import { LocationController } from "./location.controller";

export const locationController = new LocationController(locationService);
