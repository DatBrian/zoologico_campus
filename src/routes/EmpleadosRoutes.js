import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import EmpleadosController from "../api/v1/EmpleadosController.js";
import ValidateDTOMiddleware from "../middlewares/ValidateDTOMiddleware.js";
import { EmpleadosDTO } from "../models/dto/EmpleadosDTO.js";
import EmpleadosSchema from "../models/schemas/EmpleadosSchema.js"
import passportHelper from "../helpers/passPortHelper.js"
import { limitUsuario } from "../helpers/limit.js";

class EmpleadosRoutes{
    constructor(){
        this.path = "/empleados";
        this.router = Router();
        this.controller = new EmpleadosController(),
        this.version = routesVersioning();
        this.initRoutes();
        this.schema = null;
    }

    initRoutes(){
        this.router.use(
            limitUsuario(),
            passportHelper.authenticate("bearer", { session: false })
        );
        this.router.get(`/all/:id?/:jornada?/:area?`,
        this.version({
            "1.0.0": this.controller.getAll,
            "1.0.1": this.controller.getById,
            "1.0.2": this.controller.getBySchedule,
            "1.0.3": this.controller.getByCargoArea
        }));
        this.router.post(`/insert`,
        new ValidateDTOMiddleware(EmpleadosDTO, EmpleadosSchema.properties()).validate(),
        (req, res) => {
            this.version({
                "1.0.0": this.controller.insertOne(req,res)
            });
        });
        this.router.put(`/update/:id?`,
        new ValidateDTOMiddleware(EmpleadosDTO, EmpleadosSchema.properties()).validate(),
        (req, res)=>{
            this.version({
                "1.0.0": this.controller.updateOne(req,res)
            })
        })
        this.router.delete(`/delete/:id?`,
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