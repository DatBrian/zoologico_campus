import { ObjectId } from "mongodb";
import EmpleadosRepository from "../repositories/EmpleadosRepository.js";
import ClientError from "../utils/ClientError.js";

class EmpleadosService   {
    constructor(){
        this.repository = null;
    }
    async getAll(){
            this.repository = new EmpleadosRepository();
            return await this.repository.getAll();
    }
    async getById(id){
            this.repository = new EmpleadosRepository();
            const objectId = new ObjectId;
            return await this.repository.getByid(objectId);
    }
    async insertOne(body){
            this.repository = new EmpleadosRepository();
            return await this.repository.insertOne(body);
    }
    async updateOne(id,body){
            this.repository = new EmpleadosRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId, body);
    }
    async deleteOne(id){
            this.repository = new EmpleadosRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId);
    }
}
export default EmpleadosService;