import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import EmpleadosController from "../api/v1/EmpleadosController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { EmpleadosDTO } from "../models/dto/EmpleadosDTO.js";


class EmpleadosRoutes{
    constructor(){
        this.path = "/empleados";
        this.router = Router();
        this.controller = new EmpleadosController(),
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
        new ValidateDTOMiddleware(EmpleadosDTO).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(EmpleadosDTO).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`${this.path}/delete/:id?`,
        new ValidateDTOMiddleware(EmpleadosDTO).validate(),
        (req,res)=>{
            this.version({
                "1.0.0": this.controller.deleteOne(req,res)
            })
        }
        )
    }
}

export default EmpleadosRoutes