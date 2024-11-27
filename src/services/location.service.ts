import { LocationRepository } from "../interfaces";
import { ILocation, Locations } from "../models";
import { CreateLocationApi, UpdateLocationApi } from "../types/location";

export class LocationService {
    constructor(private readonly repository: LocationRepository) {}

    async createLocation(data: CreateLocationApi.Data) {
        const dbRecord: ILocation = {
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
            ...data,
        };
        return await this.repository.createLocation(dbRecord);
    }

    async getLocation(id: string) {
        return await this.repository.getLocation(id);
    }

    async updateLocation(id: string, data: ILocation) {
        return await this.repository.updateLocation(id, data);
    }
}
