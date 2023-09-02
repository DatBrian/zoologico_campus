import ClientError from "../../utils/ClientError.js";

class EventosSchema {
    constructor(database) {
        this.database = database;
        this.entity = "eventos";
        this.collection = this.database.collection(this.entity);
    }

    async generateCollection() {
        try {
            await this.database.createCollection(this.entity, {
                capped: true,
                size: 10000,
                max: 10,
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        additionalProperties: false,
                        required: [
                            "fecha",
                            "estado",
                            "area",
                            "descripcion",
                            "hora_inicio",
                            "hora_finalizacion",
                        ],
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            fecha: {
                                bsonType: "string",
                                description:
                                    "Debe informar el campo date y este debe ser un string",
                            },
                            estado: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description:
                                    "Debe informar el campo state y este debe ser un string",
                            },
                            area: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description:
                                    "Debe informar el campo belonging_area y este debe ser un string",
                            },
                            descripcion: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$",
                                description:
                                    "Debe informar el campo description_info y este debe ser un string",
                            },
                            hora_inicio: {
                                bsonType: "string",
                                description:
                                    "Debe informar el campo start_time y este debe ser un string",
                            },
                            hora_finalizacion: {
                                bsonType: "string",
                                description:
                                    "Debe informar el campo end_time y este debe ser un string",
                            },
                        },
                    },
                },
            });
        } catch (error) {
            new ClientError(`Error al generar la colección de ${this.entity}`);
            throw error.message;
        }
    }

    async createData() {
        try {
            await this.collection.insertMany([
                {
                    fecha: "2023-06-01",
                    estado: "Activo",
                    area: "Jardín Zoológico",
                    descripcion: "Charla sobre conservación de tigres blancos",
                    hora_inicio: "10:00 am",
                    hora_finalizacion: "11:30 am",
                },
                {
                    fecha: "2023-06-05",
                    estado: "Activo",
                    area: "Aviario",
                    descripcion: "Exhibición de aves exóticas",
                    hora_inicio: "11:00 am",
                    hora_finalizacion: "12:30 pm",
                },
                {
                    fecha: "2023-06-10",
                    estado: "Activo",
                    area: "Acuario",
                    descripcion: "Alimentación de tiburones",
                    hora_inicio: "2:00 pm",
                    hora_finalizacion: "2:30 pm",
                },
                {
                    fecha: "2023-06-15",
                    estado: "Activo",
                    area: "Safari",
                    descripcion: "Recorrido por la zona de los leones",
                    hora_inicio: "3:30 pm",
                    hora_finalizacion: "5:00 pm",
                },
                {
                    fecha: "2023-06-20",
                    estado: "Activo",
                    area: "Anfiteatro",
                    descripcion: "Espectáculo de delfines",
                    hora_inicio: "12:00 pm",
                    hora_finalizacion: "1:00 pm",
                },
            ]);
        } catch (error) {
            new ClientError(
                `Ocurrió un error al generar la data de ${this.entity}`
            );
            throw error.message;
        }
    }
}
export default EventosSchema;
