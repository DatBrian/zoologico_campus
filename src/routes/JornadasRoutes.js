import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import JornadasController from "../api/v1/JornadasController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { JornadasDTO } from "../models/dto/JornadasDTO.js";
import JornadasSchema from "../models/schemas/JornadasSchema.js"
import passportHelper from "../helpers/passPortHelper.js"
import { limitUsuario } from "../helpers/limit.js";

class JornadasRoutes{
    constructor(){
        this.path = "/jornadas";
        this.router = Router();
        this.controller = new JornadasController(),
        this.version = routesVersioning();
        this.initRoutes();
        this.schema = null;
    }

    initRoutes(){
        this.router.use(
            limitUsuario(),
            passportHelper.authenticate("bearer", { session: false })
        );
        this.router.get(`/all/:id?`,
        this.version({
            "1.0.0": this.controller.getAll,
            "1.0.1": this.controller.getById
        }));
        this.router.post(`/insert`,
        new ValidateDTOMiddleware(JornadasDTO, JornadasSchema.properties()).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`/update/:id?`,
        new ValidateDTOMiddleware(JornadasDTO, JornadasSchema.properties()).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`/delete/:id?`,
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