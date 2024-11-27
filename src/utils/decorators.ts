import { NextFunction, Request, Response } from "express";
import { Func } from "../types";
import Joi from "joi";

export function bind<Type extends { new (...args: any[]): any }>(target: Type) {
    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            const methods = Object.getOwnPropertyNames(target.prototype);

            for (const methodName of methods) {
                if (methodName !== "constructor" && typeof this[methodName] === "function") {
                    this[methodName] = this[methodName].bind(this);
                }
            }
        }
    };
}

export function Controller(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalController = descriptor.value;
    //replace original controller with below controller
    descriptor.value = async function (...args: [Request, Response, NextFunction]) {
        const nextFunc: NextFunction = args[2];
        const res: Response = args[1];
        try {
            const resObj = await originalController.apply(this, args);
            return res.status(200).json({ status: true, response: resObj });
        } catch (error: any) {
            nextFunc(error);
        }
    };
}

export type ValidatorFunc = Func<Request, { error?: { message: string } }>;

export function Validator(validator: Joi.ObjectSchema | ValidatorFunc) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
        const originalController = descriptor.value;

        descriptor.value = async function (...args: [Request, Response, NextFunction]) {
            const req = args[0];
            let validationRes;
            if (typeof validator === "function") {
                validationRes = validator(req); //can have function with multiple validations
            } else {
                validationRes = validator.validate(req.body);
            }
            if (validationRes.error) throw new Error(validationRes.error.message);
            return await originalController.apply(this, args);
        };
    };
}
