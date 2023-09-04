import ClientError from "../../utils/ClientError.js";

class AnimalesSchema {
    constructor(database) {
        this.database = database;
        this.entity = "animales";
        this.collection = this.database.collection(this.entity);
    }

    static properties(){
        return {
            _id: {
                bsonType: "objectId",
            },
            nombre: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo name y este debe ser un string",
            },
            especie: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo species y este debe ser un string",
            },
            clase: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo class y este debe ser un string",
            },
            sub_clase: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo sub_class y este debe ser un string",
            },
            pais_origen: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo origin y este debe ser un string",
            },
            estado: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo state y este debe ser un string",
            },
            dato_curioso: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo curiosity y este debe ser un string",
            },
            zona: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo zone y este debe ser un string",
            },
            area: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo belonging_area y este debe ser un string",
            },
        }
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
                            "nombre",
                            "especie",
                            "clase",
                            "sub_clase",
                            "pais_origen",
                            "estado",
                            "dato_curioso",
                            "zona",
                            "area",
                        ],
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            nombre: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo name y este debe ser un string",
                            },
                            especie: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo species y este debe ser un string",
                            },
                            clase: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo class y este debe ser un string",
                            },
                            sub_clase: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo sub_class y este debe ser un string",
                            },
                            pais_origen: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo origin y este debe ser un string",
                            },
                            estado: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo state y este debe ser un string",
                            },
                            dato_curioso: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo curiosity y este debe ser un string",
                            },
                            zona: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo zone y este debe ser un string",
                            },
                            area: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo belonging_area y este debe ser un string",
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
                    nombre: "León",
                    especie: "Panthera leo",
                    clase: "Mammalia",
                    sub_clase: "Theria",
                    pais_origen: "África",
                    estado: "Vulnerable",
                    dato_curioso:
                        "Los leones son conocidos por ser los reyes de la selva.",
                    zona: "Savana",
                    area: "Reserva Natural",
                },
                {
                    nombre: "Elefante africano",
                    especie: "Loxodonta africana",
                    clase: "Mammalia",
                    sub_clase: "Theria",
                    pais_origen: "África",
                    estado: "Amenazado",
                    dato_curioso:
                        "Los elefantes son los animales terrestres más grandes del mundo.",
                    zona: "Selva",
                    area: "Parque Nacional",
                },
                {
                    nombre: "Tigre de Bengala",
                    especie: "Panthera tigris tigris",
                    clase: "Mammalia",
                    sub_clase: "Theria",
                    pais_origen: "India",
                    estado: "En peligro",
                    dato_curioso:
                        "Los tigres son cazadores solitarios y excelentes nadadores.",
                    zona: "Bosque",
                    area: "Reserva de Tigres",
                },
                {
                    nombre: "Pingüino emperador",
                    especie: "Aptenodytes forsteri",
                    clase: "Aves",
                    subclase: "Neornithes",
                    pais_origen: "Antártida",
                    estado: "Casi amenazado",
                    dato_curioso:
                        "Los pingüinos emperador son conocidos por su impresionante forma de crianza.",
                    zona: "Antártida",
                    area: "Colonia de Pingüinos",
                },
                {
                    nombre: "Tortuga marina",
                    especie: "Chelonia mydas",
                    clase: "Reptilia",
                    sub_clase: "Diapsida",
                    pais_origen: "Océanos del mundo",
                    estado: "En peligro crítico",
                    dato_curioso:
                        "Las tortugas marinas viajan miles de millas para anidar en las playas donde nacieron.",
                    zona: "Océano",
                    area: "Hábitat Marino",
                },
            ]);
        } catch (error) {
            new ClientError(
                `Ocurrió un error al generar los datos de ${this.entity}`
            );
            throw error.message;
        }
    }
}
export default AnimalesSchema;
