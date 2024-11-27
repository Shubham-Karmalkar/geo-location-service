import { LocationRepository } from "../interfaces";
import { ILocation, Locations } from "../models";

export class SimpleMongoLocationRepository implements LocationRepository {
    async createLocation(data: ILocation) {
        const newLocation = new Locations(data);
        const result = await newLocation.save();
        return result;
    }
    async getLocation(id: string) {
        const result = await Locations.findOne<ILocation>({ _id: id });
        if (!result) throw Error("Data not found");
        return result;
    }
    async updateLocation(id: string, data: ILocation) {
        const result = await Locations.updateOne<ILocation>(
            { _id: id },
            {
                $set: { ...data },
            },
            { new: true },
        );
        return result;
    }
}
