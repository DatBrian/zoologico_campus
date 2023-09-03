import ServiciosService from "../../services/ServiciosService.js";
import ClientError from "../../utils/ClientError.js";

class ServiciosController{
    constructor(){
        this.service = null;
    }

    async getAll(_req, res){
        try {
            this.service = new ServiciosService();
            const Servicios = await this.service.getAll();
            res.json(Servicios);
        } catch (error) {
            new ClientError(400, "Error al obtener los Servicios Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            this.service = new ServiciosService();
            const animal = await this.service.getById(req.query.id);
            res.json(animal);
        } catch (error) {
            new ClientError(400, "Error al obtener los Servicios Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            this.service = new ServiciosService();
            const response = await this.service.insertOne(req.body);
            res,json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los Servicios Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            this.service = new ServiciosService();
            const body = await req.body;
            const id = await req.query.id;
            const response = await this.service.updateOne(id, body);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al insertar los Servicios Controlador");
            throw error.message;
        }
    }
    async deleteOne (req, res){
        try {
            this.service = new ServiciosService();
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los Servicios Controlador");
            throw error.message;
        }
    }
}
export default ServiciosController;