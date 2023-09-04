import Connection from "../db/Connection.js";
import ClientError from "../utils/ClientError.js";

class EventosRepository extends Connection{
    constructor(){
        super();
        this.entity = "eventos";
    }

    async getAll(){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "date":"$fecha",
                    "state":"$estado",
                    "belonging_area":"$area",
                    "description_info":"$descripcion",
                    "start_time":"$hora_inicio",
                    "end_time":"$hora_finalizacion"
                }
            }]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getAllMatine(){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match:{hora_inicio:{ $regex: "^(0?[0-9]|1[0-1]):[0-5]\\d\\s?(am|AM)$" }}
                },
                {
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "date":"$fecha",
                    "state":"$estado",
                    "belonging_area":"$area",
                    "description_info":"$descripcion",
                    "start_time":"$hora_inicio",
                    "end_time":"$hora_finalizacion"
                }
            }]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getById(id){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match: { "_id": id }
                },
                {
                    $project: {
                        "_id":0,
                        "id":"$_id",
                        "date":"$fecha",
                        "state":"$estado",
                        "belonging_area":"$area",
                        "description_info":"$descripcion",
                        "start_time":"$hora_inicio",
                        "end_time":"$hora_finalizacion"
                    }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getByHour(hora){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match:{hora_inicio:hora}
                },
                {
                    $project: {
                        "_id":0,
                        "id":"$_id",
                        "date":"$fecha",
                        "state":"$estado",
                        "belonging_area":"$area",
                        "description_info":"$descripcion",
                        "start_time":"$hora_inicio",
                        "end_time":"$hora_finalizacion"
                    }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getByEstado(estado){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match:{estado:estado}
                },
                {
                    $project: {
                        "_id":0,
                        "id":"$_id",
                        "date":"$fecha",
                        "state":"$estado",
                        "belonging_area":"$area",
                        "description_info":"$descripcion",
                        "start_time":"$hora_inicio",
                        "end_time":"$hora_finalizacion"
                    }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async insertOne(body){
            await this.connect();
            await this.getDatabase().collection(this.entity).insertOne(body);
            return `${this.entity} inserted successfully`
    }
    async updateOne(id,body){
            await this.connect();
            await this.getDatabase().collection(this.entity).updateOne(
                {"_id": id},
                {$set: body}
            );
            return `${this.entity} updated successfully`
    }
    async deleteOne(id){
            await this.connect();
            await this.getDatabase().collection(this.entity).deleteOne({"_id": id});
            return `${this.entity} deleted succesfully`
    }
}
export default EventosRepository;