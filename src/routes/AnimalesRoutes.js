import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import AnimalesController from "../api/v1/AnimalesController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { AnimalesDTO } from "../models/dto/AnimalesDTO.js";
import AnimalesSchema from "../models/schemas/AnimalesSchema.js"
import passportHelper from "../helpers/passPortHelper.js"
import { limitUsuario } from "../helpers/limit.js";

class AnimalesRoutes{
    constructor(){
        this.path = "/animales";
        this.router = Router();
        this.controller = new AnimalesController(),
        this.version = routesVersioning();
        this.initRoutes();
        this.schema = null;
    }

    async initRoutes() {
        this.router.use(
            limitUsuario(),
            passportHelper.authenticate("bearer", { session: false })
        );
        this.router.get(`/all/:id?/:clase?`,
        this.version({
            "1.0.0": this.controller.getAll,
            "1.0.1": this.controller.getById,
            "1.0.2": this.controller.getByAlphabeticOrder,
            "1.0.3": this.controller.getByClass
        }));
        this.router.post(`/insert`,
        new ValidateDTOMiddleware(AnimalesDTO, AnimalesSchema.properties()).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`/update/:id?`,
        new ValidateDTOMiddleware(AnimalesDTO, AnimalesSchema.properties()).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`/delete/:id?`,
        (req,res)=>{
            this.version({
                "1.0.0": this.controller.deleteOne(req,res)
            })
        }
        )
    }
    
}

export default AnimalesRoutes