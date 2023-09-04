import AnimalesService from "../../services/AnimalesService.js";
import ClientError from "../../utils/ClientError.js";

class AnimalesController{
    constructor(){
        this.service = null;
    }

    async getAll(_req, res){
        try {
            this.service= new AnimalesService();
            const Animales = await this.service.getAll();
            res.json(Animales);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async getById(req, res){
        try {
            this.service= new AnimalesService();
            const Animal = await this.service.getById(req.query.id);
            res.json(Animal);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async getByAlphabeticOrder(_req, res){
        try {
            this.service= new AnimalesService();
            const AnimalesOrder = await this.service.getByAlphabeticOrder();
            res.json(AnimalesOrder);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async getByClass(req, res){
        try {
            this.service= new AnimalesService();
            const AnimalesClass = await this.service.getByClass(req.query.clase);
            res.json(AnimalesClass);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async getBySubClass(req, res){
        try {
            this.service= new AnimalesService();
            const AnimalesSubClass = await this.service.getBySubClass(req.query.sub_clase);
            res.json(AnimalesSubClass);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async getByZone(req, res){
        try {
            this.service= new AnimalesService();
            const AnimalesZona = await this.service.getByZone(req.query.zona);
            res.json(AnimalesZona);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async getBySubClassEstado(req, res){
        try {
            this.service= new AnimalesService();
            const AnimalesSubClassEstado = await this.service.getBySubClass[req.query.sub_clase,req.query.estado];
            res.json(AnimalesSubClassEstado);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Controlador");
            throw error.message;
        }
    }
    async insertOne (req, res){
        try {
            this.service= new AnimalesService();
            const response = await this.service.insertOne(req.body);
            res.json(response)
        } catch (error) {
            new ClientError(400, "Error al insertar los animales Controlador");
            throw error.message;
        }
    }
    async updateOne (req, res){
        try {
            this.service= new AnimalesService();
            const body = await req.body;
            const id = await req.query.id;
            const response = await this.service.updateOne(id, body);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al insertar los animales Controlador");
            throw error.message;
        }
    }
    async deleteOne (req, res){
        try {
            this.service= new AnimalesService();
            console.log(req.query.id);
            const response = await this.service.deleteOne(req.query.id);
            res.json(response);
        } catch (error) {
            new ClientError(400, "Error al borrar los animales Controlador");
            throw error.message;
        }
    }
}
export default AnimalesController;