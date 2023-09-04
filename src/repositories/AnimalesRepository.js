import Connection from "../db/Connection.js";
import ClientError from "../utils/ClientError.js";

class AnimalesRepository extends Connection{
    constructor(){
        super();
        this.entity = "animales";
    }
    async getAll(){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "name":"$nombre",
                    "species":"$especie",
                    "class":"$clase",
                    "sub_class":"$sub_clase",
                    "origin":"$pais_origen",
                    "state":"$estado",
                    "curiosity":"$dato_curioso",
                    "zone":"$zona",
                    "belonging_area":"$area"
                }
            }]).toArray();
        } catch (error) {
            throw new ClientError(400, `Error al obtener en ${this.entity}: ${error.message}`);
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
                    "name":"$nombre",
                    "species":"$especie",
                    "class":"$clase",
                    "sub_class":"$sub_clase",
                    "origin":"$pais_origen",
                    "state":"$estado",
                    "curiosity":"$dato_curioso",
                    "zone":"$zona",
                    "belonging_area":"$area"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getByAlphabeticOrder(){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $sort: { "nombre": 1 }
                },
                {
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "name":"$nombre",
                    "species":"$especie",
                    "class":"$clase",
                    "sub_class":"$sub_clase",
                    "origin":"$pais_origen",
                    "state":"$estado",
                    "curiosity":"$dato_curioso",
                    "zone":"$zona",
                    "belonging_area":"$area"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getByClass(clase){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match: {clase: clase}
                },
                {
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "name":"$nombre",
                    "species":"$especie",
                    "class":"$clase",
                    "sub_class":"$sub_clase",
                    "origin":"$pais_origen",
                    "state":"$estado",
                    "curiosity":"$dato_curioso",
                    "zone":"$zona",
                    "belonging_area":"$area"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getBySubClass(sub_clase){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match: {sub_clase: sub_clase}
                },
                {
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "name":"$nombre",
                    "species":"$especie",
                    "class":"$clase",
                    "sub_class":"$sub_clase",
                    "origin":"$pais_origen",
                    "state":"$estado",
                    "curiosity":"$dato_curioso",
                    "zone":"$zona",
                    "belonging_area":"$area"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getByZone(zona){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match: {zona: zona}
                },
                {
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "name":"$nombre",
                    "species":"$especie",
                    "class":"$clase",
                    "sub_class":"$sub_clase",
                    "origin":"$pais_origen",
                    "state":"$estado",
                    "curiosity":"$dato_curioso",
                    "zone":"$zona",
                    "belonging_area":"$area"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getBySubClassEstado(sub_clase, estado){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match: {
                        sub_clase: sub_clase,
                        estado: estado
                    }
                },
                {
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "name":"$nombre",
                    "species":"$especie",
                    "class":"$clase",
                    "sub_class":"$sub_clase",
                    "origin":"$pais_origen",
                    "state":"$estado",
                    "curiosity":"$dato_curioso",
                    "zone":"$zona",
                    "belonging_area":"$area"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(400, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async insertOne(body){
            console.log(body);
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
            console.log(id);
            await this.connect();
            await this.getDatabase().collection(this.entity).deleteOne(
                {"_id": id}
            );
            return `${this.entity} deleted succesfully`
    }
}
export default AnimalesRepository;