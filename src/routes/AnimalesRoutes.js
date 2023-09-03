import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import AnimalesController from "../api/v1/AnimalesController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { AnimalesDTO } from "../models/dto/AnimalesDTO.js";


class AnimalesRoutes{
    constructor(){
        this.path = "/animales";
        this.router = Router();
        this.controller = new AnimalesController(),
        this.version = routesVersioning();
        this.initRoutes();
    }

    async initRoutes(){
        this.router.get(`${this.path}/all/:id?`,
        this.version({
            "1.0.0": this.controller.getAll,
            "1.0.1": this.controller.getById
        }));
        this.router.post(`${this.path}/insert`,
        new ValidateDTOMiddleware(AnimalesDTO).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`${this.path}/update/:id?`,
        new ValidateDTOMiddleware(AnimalesDTO).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`${this.path}/delete/:id?`,
        (req,res)=>{
            this.version({
                "1.0.0": this.controller.deleteOne(req,res)
            })
        }
        )
    }
    
}

export default AnimalesRoutes