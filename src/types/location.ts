import { ReqData } from ".";
import { LOCATION_CATEGORIES, SHAPE_TYPES } from "../constants/database";
import { ILocation } from "../models";

export namespace CreateLocationApi {
    export type Data = {
        name: string;
        description: string;
        state: string;
        city: string;
        address: string;
        type: LOCATION_CATEGORIES;
        location: {
            type: SHAPE_TYPES;
            coordinates: any[];
        };
    };
    export type Request = ReqData<Data>;
}

export namespace GetLocationApi {
    export type Data = never;
    export type Params = { id: string };
    export type Request = ReqData<Data, Params>;
}

export namespace UpdateLocationApi {
    export type Data = ILocation;
    export type Params = { id: string };
    export type Request = ReqData<Data, Params>;
}
