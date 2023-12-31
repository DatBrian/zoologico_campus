import EventosService from "../../services/EventosService.js";
import ClientError from "../../utils/ClientError.js";

class EventosController{
    constructor(){
        this.service = null;
    }

    async getAll(_req, res){
        try {
            this.service = new EventosService();
            const Eventos = await this.service.getAll();
            res.json(Eventos);
        } catch (error) {
            new ClientError(400, "Error al obtener los Eventos Controlador");
            throw error.message;
        }
    }
    async getAllMatine(_req, res){
        try {
            this.service = new EventosService();
            const EventosMatine = await this.service.getAllMatine();
            res.json(EventosMatine);
        } catch (error) {
            new ClientError(400, "Error al obtener los Eventos Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            this.service = new EventosService();
            const Evento = await this.service.getById(req.query.id);
            res.json(Evento);
        } catch (error) {
            new ClientError(400, "Error al obtener los Eventos Controlador");
            throw error.message;
        }
    }
    async getByHour(req, res){
        try {
            this.service = new EventosService();
            const eventoHora = await this.service.getByHour(req.query.hora);
            res.json(eventoHora);
        } catch (error) {
            new ClientError(400, "Error al obtener los Eventos Controlador");
            throw error.message;
        }
    }
    async getByEstado(req, res){
        try {
            this.service = new EventosService();
            const eventoEstado = await this.service.getByEstado(req.query.estado);
            res.json(eventoEstado);
        } catch (error) {
            new ClientError(400, "Error al obtener los Eventos Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            this.service = new EventosService();
            const response = await this.service.insertOne(req.body);
            res.json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los Eventos Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            this.service = new EventosService();
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
            this.service = new EventosService();
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los Eventos Controlador");
            throw error.message;
        }
    }
}
export default EventosController;