import { ObjectId } from "mongodb";
import AnimalesRepository from "../repositories/AnimalesRepository.js";
import ClientError from "../utils/ClientError.js";

class AnimalesService   {
    constructor(){
        this.repository = null;
    }
    async getAll(){
            this.repository= new AnimalesRepository();
            return await this.repository.getAll();
    }
    async getById(id) {
            this.repository= new AnimalesRepository();
            const objectId = new ObjectId(id);
            return await this.repository.getById(objectId);
    }
    async insertOne(body){
            this.repository= new AnimalesRepository();
            return await this.repository.insertOne(body);
    }
    async updateOne(id,body){
            this.repository= new AnimalesRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId, body);
    }
    async deleteOne(id){
            this.repository= new AnimalesRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId);
    }
}
export default AnimalesService;