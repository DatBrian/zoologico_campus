import EventosService from "../../services/EventosService.js";
import ClientError from "../../utils/ClientError.js";

class EventosController{
    constructor(){
        this.service = new EventosService();
    }

    async getAll(_req, res){
        try {
            const Eventos = await this.service.getAll();
            res.json(Eventos);
        } catch (error) {
            new ClientError(400, "Error al obtener los Eventos Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            const animal = await this.service.getById(req.query.id);
            res.json(animal);
        } catch (error) {
            new ClientError(400, "Error al obtener los Eventos Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            const response = await this.service.insertOne(req.body);
            res,json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los Eventos Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            const body = await req.body;
            const id = await req.query.id;
            const response = await this.service.updateOne(id, body);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al insertar los Eventos Controlador");
            throw error.message;
        }
    }
    async deleteOne (req, res){
        try {
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los Eventos Controlador");
            throw error.message;
        }
    }
}
export default EventosController;