import EmpleadosService from "../../services/EmpleadosService.js";
import ClientError from "../../utils/ClientError.js";

class EmpleadosController{
    constructor(){
        this.service = null;
    }

    async getAll(_req, res){
        try {
            this.service = new EmpleadosService();
            const Empleados = await this.service.getAll();
            res.json(Empleados);
        } catch (error) {
            new ClientError(400, "Error al obtener los Empleados Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            this.service = new EmpleadosService();
            const Empleado = await this.service.getById(req.query.id);
            res.json(Empleado);
        } catch (error) {
            new ClientError(400, "Error al obtener los Empleados Controlador");
            throw error.message;
        }
    }
    async getBySchedule(req, res){
        try {
            this.service = new EmpleadosService();
            const Empleado = await this.service.getBySchedule(req.query.jornada);
            res.json(Empleado);
        } catch (error) {
            new ClientError(400, "Error al obtener los Empleados Controlador");
            throw error.message;
        }
    }
    async getByCargoArea(req, res){
        try {
            this.service = new EmpleadosService();
            const cargo = req.query.cargo;
            const area_asignada = req.query.area_asignada;
            const Empleado = await this.service.getByCargoArea(cargo, area_asignada);
            res.json(Empleado);
        } catch (error) {
            new ClientError(400, "Error al obtener los Empleados Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            this.service = new EmpleadosService();
            const response = await this.service.insertOne(req.body);
            res.json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los Empleados Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            this.service = new EmpleadosService();
            const body = await req.body;
            const id = await req.query.id;
            const response = await this.service.updateOne(id, body);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al insertar los Empleados Controlador");
            throw error.message;
        }
    }
    async deleteOne (req, res){
        try {
            this.service = new EmpleadosService();
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los Empleados Controlador");
            throw error.message;
        }
    }
}
export default EmpleadosController;