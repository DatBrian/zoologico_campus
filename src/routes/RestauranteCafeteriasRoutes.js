import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import RestauranteCafeteriasController from "../api/v1/RestauranteCafeteriasController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { RestauranteCafeteriasDTO } from "../models/dto/RestauranteCafeteriasDTO.js";


class RestauranteCafeteriasRoutes{
    constructor(){
        this.path = "/restauranteCafeterias";
        this.router = Router();
        this.controller = new RestauranteCafeteriasController(),
        this.version = routesVersioning();
        this.initRoutes();
    }

    initRoutes(){
        this.router.get(`${this.path}/all/:id?`,
        this.version({
            "1.0.0": this.controller.getAll,
            "1.0.1": this.controller.getById
        }));
        this.router.post(`${this.path}/insert`,
        new ValidateDTOMiddleware(RestauranteCafeteriasDTO).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(RestauranteCafeteriasDTO).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`${this.path}/delete/:id?`,
        new ValidateDTOMiddleware(RestauranteCafeteriasDTO).validate(),
        (req,res)=>{
            this.version({
                "1.0.0": this.controller.deleteOne(req,res)
            })
        }
        )
    }
}

export default RestauranteCafeteriasRoutes