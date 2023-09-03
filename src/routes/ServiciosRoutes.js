import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import ServiciosController from "../api/v1/ServiciosController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { ServiciosDTO } from "../models/dto/ServiciosDTO.js";


class ServiciosRoutes{
    constructor(){
        this.path = "/servicios";
        this.router = Router();
        this.controller = new ServiciosController(),
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
        new ValidateDTOMiddleware(ServiciosDTO).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(ServiciosDTO).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`${this.path}/delete/:id?`,
        new ValidateDTOMiddleware(ServiciosDTO).validate(),
        (req,res)=>{
            this.version({
                "1.0.0": this.controller.deleteOne(req,res)
            })
        }
        )
    }
}

export default ServiciosRoutes