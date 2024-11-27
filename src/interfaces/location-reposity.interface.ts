import { ILocation } from "../models";

export interface LocationRepository {
    createLocation(data: ILocation): any;
    getLocation(id: string): Promise<ILocation>;
    updateLocation(id: string, data: ILocation): Promise<any>;
}
