import { Response } from "express";
import { LocationService } from "../services";
import { bind, Controller, Validator } from "../utils/decorators";
import { CreateLocationApi, GetLocationApi, UpdateLocationApi } from "../types/location";
import { createLocationValidator, getLocationByIdValidator } from "../validations/locations.validations";

@bind
export class LocationController {
    constructor(private readonly service: LocationService) {}

    @Controller
    @Validator(createLocationValidator)
    async createLocation(req: CreateLocationApi.Request) {
        return await this.service.createLocation(req.body);
    }

    @Controller
    @Validator(getLocationByIdValidator)
    async getLocation(req: GetLocationApi.Request) {
        return await this.service.getLocation(req.params.id);
    }

    @Controller
    async updateLocation(req: UpdateLocationApi.Request) {
        return await this.service.updateLocation(req.params.id, req.body);
    }
}
