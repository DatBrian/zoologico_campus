import Connection from "../db/Connection.js";
import ClientError from "../utils/ClientError.js";

class JornadasRepository extends Connection{
    constructor(){
        super();
        this.entity = "jornadas";
    }

    async getAll(){
        try {
            await this.connect();
            return await this.getDatabase().collection(this.entity).aggregate([{
                $project: {
                    "_id":0,
                    "id":"$_id",
                    "schedule":"$nombre_jornada",
                    "entry_time":"$horario_entrada",
                    "departure_time":"$horario_salida",
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
                        "schedule":"$nombre_jornada",
                        "entry_time":"$horario_entrada",
                        "departure_time":"$horario_salida",
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
            const response = {
                status: 200,
                message: `Inserted Succesfully`,
                path: `${this.entity} `
            }
            return response
    }
    async updateOne(id,body){
            await this.connect();
            await this.getDatabase().collection(this.entity).updateOne(
                {"_id": id},
                {$set: body}
            );
            const response = {
                status: 200,
                message: `Updated Succesfully`,
                path: `${this.entity} `
            }
            return response
    }
    async deleteOne(id){
            await this.connect();
            await this.getDatabase().collection(this.entity).deleteOne({"_id": id});
            const response = {
                status: 200,
                message: `Deleted Succesfully`,
                path: `${this.entity} `
            }
            return response
    }
}
export default JornadasRepository;