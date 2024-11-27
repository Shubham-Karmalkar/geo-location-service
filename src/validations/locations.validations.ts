import Joi, { string } from "joi";
import { CreateLocationApi, GetLocationApi } from "../types/location";
import { LOCATION_CATEGORIES, SHAPE_TYPES } from "../constants/database";
import { Request } from "express";

export const createLocationValidator = Joi.object<CreateLocationApi.Data, true>({
    name: Joi.string().required(),
    description: Joi.string(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    address: Joi.string().required(),
    type: Joi.string().valid(...Object.values(LOCATION_CATEGORIES)),
    location: Joi.object<CreateLocationApi.Data["location"], true>({
        type: Joi.string()
            .valid(...Object.values(SHAPE_TYPES))
            .required(),
        coordinates: Joi.array()
            .required()
            .when("type", {
                is: SHAPE_TYPES.POINT,
                then: Joi.array().length(2).items(Joi.number()).required(),
                otherwise: Joi.invalid(),
            })
            .when("type", {
                is: SHAPE_TYPES.MULTI_POINT,
                then: Joi.array().items(Joi.array().length(2).items(Joi.number())).required(),
                otherwise: Joi.invalid(),
            })
            .when("type", {
                is: SHAPE_TYPES.POLYGON,
                then: Joi.array()
                    .items(Joi.array().min(4).items(Joi.array().length(2).items(Joi.number())))
                    .required(),
                otherwise: Joi.invalid(),
            })
            .when("type", {
                is: SHAPE_TYPES.MULTI_POLYGON,
                then: Joi.array()
                    .items(Joi.array().items(Joi.array().items(Joi.array().length(2).items(Joi.number()))))
                    .required(),
                otherwise: Joi.invalid(),
            }),
    }),
});

const getLocationByIdParam = Joi.object<GetLocationApi.Params, true>({
    id: Joi.string().required(),
});

export function getLocationByIdValidator(req: Request) {
    const paramValidation = getLocationByIdParam.validate(req.params);
    return paramValidation;
}
