import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import PasesController from "../api/v1/PasesController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { PasesDTO } from "../models/dto/PasesDTO.js";


class PasesRoutes{
    constructor(){
        this.path = "/Pases";
        this.router = Router();
        this.controller = new PasesController(),
        this.version = routesVersioning();
        this.initRoutes();
    }

    initRoutes(){
        this.router.get(`${this.path}/all/:id?`,
        this.version({
            "1.0.0": this.controller.getAll
        }));
        this.router.post(`${this.path}/insert`,
        new ValidateDTOMiddleware(PasesDTO).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(PasesDTO).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`${this.path}/delete/:id?`,
        new ValidateDTOMiddleware(PasesDTO).validate(),
        (req,res)=>{
            this.version({
                "1.0.0": this.controller.deleteOne(req,res)
            })
        }
        )
    }
}

export default PasesRoutes