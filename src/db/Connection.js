import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

class Connection {
    constructor() {
        this.client = new MongoClient(this.getUri());
    }

    getUri() {
        return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@clusterdb.hicawdu.mongodb.net/${process.env.DB_NAME}`;
    }

    async connect() {
        try {
            await this.client.connect();
            this.db = this.client.db("db_zoologico");
        } catch (error) {
            console.error("Error al conectar con la base de datos:", error);
            throw error;
        }
    }

    getDatabase() {
        if (!this.db) {
            throw new Error("No hay una conexión establecida.");
        }
        return this.db;
    }

    async close() {
        try {
            await this.client.db().command({ ping: 1 });
            await this.client.close();
        } catch (error) {
            console.error("Error al cerrar la conexión:", error);
        }
    }
}
export default Connection;
