import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import JornadasController from "../api/v1/JornadasController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { JornadasDTO } from "../models/dto/JornadasDTO.js";


class JornadasRoutes{
    constructor(){
        this.path = "/Jornadas";
        this.router = Router();
        this.controller = new JornadasController(),
        this.version = routesVersioning();
        this.initRoutes();
    }

    initRoutes(){
        this.router.get(`${this.path}/all/:id?`,
        this.version({
            "1.0.0": this.controller.getAll
        }));
        this.router.post(`${this.path}/insert`,
        new ValidateDTOMiddleware(JornadasDTO).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(JornadasDTO).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`${this.path}/delete/:id?`,
        new ValidateDTOMiddleware(JornadasDTO).validate(),
        (req,res)=>{
            this.version({
                "1.0.0": this.controller.deleteOne(req,res)
            })
        }
        )
    }
}

export default JornadasRoutes