import { NextFunction, Request, Response, Router } from "express";
import "express-group-routes";
import { locationController } from "../controllers";

export default (app: any) => {
    app.get("/", (req: Request, res: Response) => {
        return res.send({ message: "Welcome to geo-location", service: "geo-location-system" });
    });

    app.post("/v1/location", locationController.createLocation);
    app.get("/v1/location/:id?", locationController.getLocation);
    app.put("/v1/location/:id?", locationController.updateLocation);

    app.use(async (error: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        if (res) {
            return res.status(400).send({
                status: false,
                message: "Request processed with error",
                error: error.message || JSON.stringify(error),
            });
        }
    });
};
