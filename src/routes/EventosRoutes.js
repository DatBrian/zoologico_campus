import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import EventosController from "../api/v1/EventosController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { EventosDTO } from "../models/dto/EventosDTO.js";


class EventosRoutes{
    constructor(){
        this.path = "/Eventos";
        this.router = Router();
        this.controller = new EventosController(),
        this.version = routesVersioning();
        this.initRoutes();
    }

    initRoutes(){
        this.router.get(`${this.path}/all/:id?`,
        this.version({
            "1.0.0": this.controller.getAll
        }));
        this.router.post(`${this.path}/insert`,
        new ValidateDTOMiddleware(EventosDTO).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(EventosDTO).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`${this.path}/delete/:id?`,
        new ValidateDTOMiddleware(EventosDTO).validate(),
        (req,res)=>{
            this.version({
                "1.0.0": this.controller.deleteOne(req,res)
            })
        }
        )
    }
}

export default EventosRoutes