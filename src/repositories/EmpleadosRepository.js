import Connection from "../db/Connection.js";
import ClientError from "../utils/ClientError.js";

class EmpleadosRepository extends Connection{
    constructor(){
        super();
        this.entity = "empleados";
    }

    async getAll(){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                $project:{
                    "_id":0,
                    "id":"$_id",
                    "complete_name":"$nombre_completo",
                    "assigned_position":"$cargo",
                    "address":"$direccion",
                    "Email":"$email",
                    "phone_number":"$telefono",
                    "belonging_area":"$area_asignada",
                    "zone":"$zona",
                    "schedule":"$jornada"
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
                    "complete_name":"$nombre_completo",
                    "assigned_position":"$cargo",
                    "address":"$direccion",
                    "Email":"$email",
                    "phone_number":"$telefono",
                    "belonging_area":"$area_asignada",
                    "zone":"$zona",
                    "schedule":"$jornada"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(304, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getBySchedule(jornada){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([
                {
                    $match: { jornada: jornada }
                },
                {
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "complete_name":"$nombre_completo",
                    "assigned_position":"$cargo",
                    "address":"$direccion",
                    "Email":"$email",
                    "phone_number":"$telefono",
                    "belonging_area":"$area_asignada",
                    "zone":"$zona",
                    "schedule":"$jornada"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(304, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async getByCargoArea(cargo , area_asignada){
        try {
            console.log(cargo, area_asignada);
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                $match: {
                    "cargo":cargo, 
                    "area_asignada":area_asignada
                },
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "complete_name":"$nombre_completo",
                    "assigned_position":"$cargo",
                    "address":"$direccion",
                    "Email":"$email",
                    "phone_number":"$telefono",
                    "belonging_area":"$area_asignada",
                    "zone":"$zona",
                    "schedule":"$jornada"
                }
            }
        ]).toArray();
        } catch (error) {
            new ClientError(304, `Error al obtener en ${this.entity}`);
            throw error.message;
        }
    }
    async insertOne(body){
        try {
            await this.connect();
            await this.getDatabase().collection(this.entity).insertOne(body);
            return `${this.entity} inserted successfully`
        } catch (error) {
            new ClientError(304, `Error al ingresar la data en ${this.entity}`);
            throw error.message;
        }
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
export default EmpleadosRepository;