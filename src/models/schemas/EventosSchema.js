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
                                bsonType: "date",
                                pattern:"^(?:\\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])$",
                                description: "Debe informar el campo date y este debe ser un string"
                            },
                            estado: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo state y este debe ser un string"
                            },
                            area: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo belonging_area y este debe ser un string"
                            },
                            descripcion: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo description_info y este debe ser un string"
                            },
                            hora_inicio: {
                                bsonType: "string",
                                pattern: "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$",
                                description: "Debe informar el campo start_time y este debe ser un string"
                            },
                            hora_finalizacion: {
                                bsonType: "string",
                                pattern: "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$",
                                description: "Debe informar el campo end_time y este debe ser un string"
                            }
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
                    fecha: new Date(2023,9,15),
                    estado: "Próximo",
                    area: "Anfiteatro",
                    descripcion: "Show de aves rapaces",
                    hora_inicio: "11:00 am",
                    hora_finalizacion: "12:00 pm"
                },
                {
                    fecha: new Date(2023,8,20),
                    estado: "En curso",
                    area: "Pabellón de primates",
                    descripcion: "Charla sobre comportamiento de primates",
                    hora_inicio: "02:30 pm",
                    hora_finalizacion: "03:30 pm"
                },
                {
                    fecha: new Date(2023,7,10),
                    estado: "Concluido",
                    area: "Acuario",
                    descripcion: "Alimentación de tiburones",
                    hora_inicio: "10:30 am",
                    hora_finalizacion: "11:00 am"
                },
                {
                    fecha: new Date(2023,9,1),
                    estado: "Próximo",
                    area: "Teatro Submarino",
                    descripcion: "Danza acuática con delfines",
                    hora_inicio: "03:00 pm",
                    hora_finalizacion: "04:00 pm"
                },
                {
                    fecha: new Date(2023,8,25),
                    estado: "En curso",
                    area: "Terrario de reptiles",
                    descripcion: "Demostración de serpientes venenosas",
                    hora_inicio: "01:00 pm",
                    hora_finalizacion: "01:30 pm"
                },
                {
                    fecha: new Date(2023,7,15),
                    estado: "Concluido",
                    area: "Jardín de mariposas",
                    descripcion: "Liberación de mariposas monarca",
                    hora_inicio: "11:30 am",
                    hora_finalizacion: "12:00 pm"
                },
                {
                    fecha: new Date(2023,9,5),
                    estado: "Próximo",
                    area: "Pista de cetrería",
                    descripcion: "Demostración de vuelo de aves rapaces",
                    hora_inicio: "02:00 pm",
                    hora_finalizacion: "03:00 pm"
                },
                {
                    fecha: new Date(2023,8,10),
                    estado: "En curso",
                    area: "Terrario de insectos",
                    descripcion: "Charla sobre la importancia de los insectos en el ecosistema",
                    hora_inicio: "10:00 am",
                    hora_finalizacion: "11:00 am"
                },
                {
                    fecha: new Date(2023,7,20),
                    estado: "Concluido",
                    area: "Hábitat de lémures",
                    descripcion: "Interacción con lémures",
                    hora_inicio: "03:30 pm",
                    hora_finalizacion: "04:30 pm"
                },
                {
                    fecha: new Date(2023,9,8),
                    estado: "Próximo",
                    area: "Teatro Submarino",
                    descripcion: "Espectáculo de acrobacias con delfines",
                    hora_inicio: "04:30 pm",
                    hora_finalizacion: "05:30 pm"
                }
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
