import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import PasesController from "../api/v1/PasesController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { PasesDTO } from "../models/dto/PasesDTO.js";
import PasesSchema from "../models/schemas/PasesSchema.js"


class PasesRoutes{
    constructor(){
        this.path = "/pases";
        this.router = Router();
        this.controller = new PasesController(),
        this.version = routesVersioning();
        this.initRoutes();
        this.schema = null;
    }

    initRoutes(){
        this.router.get(`${this.path}/all/:id?`,
        this.version({
            "1.0.0": this.controller.getAll,
            "1.0.1": this.controller.getById,
            "1.0.2": this.controller.getByTipo,
            "1.0.3": this.controller.getAllLess,
            "1.0.4": this.controller.getAllTotal
        }));
        this.router.post(`${this.path}/insert`,
        new ValidateDTOMiddleware(PasesDTO, PasesSchema.properties()).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(PasesDTO, PasesSchema.properties()).validate(),
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