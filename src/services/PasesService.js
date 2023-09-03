import { ObjectId } from "mongodb";
import PasesRepository from "../repositories/PasesRepository.js";
import ClientError from "../utils/ClientError.js";

class PasesService   {
    constructor(){
        this.repository = null;
    }
    async getAll(){
            this.repository = new PasesRepository();
            return await this.repository.getAll();
    }
    async getById(id){
            this.repository = new PasesRepository();
            const objectId = new ObjectId;
            return await this.repository.getByid(objectId);
    }
    async insertOne(body){
            this.repository = new PasesRepository();
            return await this.repository.insertOne(body);
    }
    async updateOne(id,body){
            this.repository = new PasesRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId, body);
    }
    async deleteOne(id){
            this.repository = new PasesRepository();
            const ObjectId =  new ObjectId(id)
            return await this.repository.updateOne(ObjectId);
    }
}
export default PasesService;