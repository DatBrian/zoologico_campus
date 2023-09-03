import { ObjectId } from "mongodb";
import ServiciosRepository from "../repositories/ServiciosRepository.js";
import ClientError from "../utils/ClientError.js";

class ServiciosService   {
    constructor(){
        this.repository = null;
    }
    async getAll(){
            this.repository = new ServiciosRepository();
            return await this.repository.getAll();
    }
    async getById(id){
            this.repository = new ServiciosRepository();
            const objectId = new ObjectId;
            return await this.repository.getByid(objectId);
    }
    async insertOne(body){
            this.repository = new ServiciosRepository();
            return await this.repository.insertOne(body);
    }
    async updateOne(id,body){
            this.repository = new ServiciosRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId, body);
    }
    async deleteOne(id){
            this.repository = new ServiciosRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId);
    }
}
export default ServiciosService;