import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import EventosController from "../api/v1/EventosController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { EventosDTO } from "../models/dto/EventosDTO.js";
import EventosSchema from "../models/schemas/EventosSchema.js"

class EventosRoutes{
    constructor(){
        this.path = "/eventos";
        this.router = Router();
        this.controller = new EventosController(),
        this.version = routesVersioning();
        this.initRoutes();
        this.schema = null;
    }

    initRoutes(){
        this.router.get(`${this.path}/all/:id?/:hora?`,
        this.version({
            "1.0.0": this.controller.getAll,
            "1.0.1": this.controller.getById,
            "1.0.2": this.controller.getByEstado,
            "1.0.3": this.controller.getAllMatine,
            "1.0.4": this.controller.getByHour
        }));
        this.router.post(`${this.path}/insert`,
        new ValidateDTOMiddleware(EventosDTO, EventosSchema.properties()).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(EventosDTO, EventosSchema.properties()).validate(),
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