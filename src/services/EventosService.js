import { ObjectId } from "mongodb";
import EventosRepository from "../repositories/EventosRepository.js";
import ClientError from "../utils/ClientError.js";

class EventosService   {
    constructor(){
        this.repository = null;
    }
    async getAll(){
            this.repository = new EventosRepository();
            return await this.repository.getAll();
    }
    async getById(id){
            this.repository = new EventosRepository();
            const objectId = new ObjectId;
            return await this.repository.getByid(objectId);
    }
    async insertOne(body){
            this.repository = new EventosRepository();
            return await this.repository.insertOne(body);
    }
    async updateOne(id,body){
            this.repository = new EventosRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId, body);
    }
    async deleteOne(id){
            this.repository = new EventosRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId);
    }
}
export default EventosService;