import { ObjectId } from "mongodb";
import AnimalesRepository from "../repositories/AnimalesRepository.js";
import ClientError from "../utils/ClientError.js";

class AnimalesService   {
    constructor(){
        this.repository = new AnimalesRepository();
    }

    async getAll(){
        try {
            return await this.repository.getAll();
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Servicio");
            throw error.message;
        }
    }
    async getById(id){
        try {
            const objectId = new ObjectId;
            return await this.repository.getByid(objectId);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Servicio");
            throw error.message;
        }
    }
    async insertOne(body){
        try {
            return await this.repository.insertOne(body);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Servicio");
            throw error.message;
        }
    }
    async updateOne(id,body){
        try {
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId, body);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Servicio");
            throw error.message;
        }
    }
    async deleteOne(id){
        try {
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId);
        } catch (error) {
            new ClientError(400, "Error al obtener los animales Servicio");
            throw error.message;
        }
    }
}
export default AnimalesService;