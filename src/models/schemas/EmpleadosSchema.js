import ClientError from "../../utils/ClientError.js";

class EmpleadosSchema {
    constructor(database) {
        this.database = database;
        this.entity = "empleados";
        this.collection = this.database.collection(this.entity);
    }

    static properties(){
        return {
            _id: {
                bsonType: "objectId",
            },
            nombre_completo: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo complete_name y este debe ser un string",
            },
            cargo: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo assigned_position y este debe ser un string",
            },
            direccion: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo address y este debe ser un string",
            },
            email: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                description:
                    "Debe informar un campo Email válido",
            },
            telefono: {
                bsonType: "string",
                pattern: "^[0-9-]*$",
                description:
                    "Debe informar el campo phone_number y este debe ser un string",
            },
            area_asignada: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo belonging_area y este debe ser un string",
            },
            zona: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo zone y este debe ser un string",
            },
            jornada: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description:
                    "Debe informar el campo schedule y este debe ser un string",
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
                            "nombre_completo",
                            "cargo",
                            "direccion",
                            "email",
                            "telefono",
                            "area_asignada",
                            "zona",
                            "jornada",
                        ],
                        properties: {
                            _id: {
                                bsonType: "objectId",
                            },
                            nombre_completo: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo complete_name y este debe ser un string",
                            },
                            cargo: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo assigned_position y este debe ser un string",
                            },
                            direccion: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo address y este debe ser un string",
                            },
                            email: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                                description:
                                    "Debe informar un campo Email válido",
                            },
                            telefono: {
                                bsonType: "string",
                                pattern: "^[0-9-]*$",
                                description:
                                    "Debe informar el campo phone_number y este debe ser un string",
                            },
                            area_asignada: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo belonging_area y este debe ser un string",
                            },
                            zona: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo zone y este debe ser un string",
                            },
                            jornada: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description:
                                    "Debe informar el campo schedule y este debe ser un string",
                            },
                        },
                    },
                },
            });
        } catch (error) {
            new ClientError(
                `Ocurrió un error al generar la colección de ${this.entity}`
            );
            throw error.message;
        }
    }

    async createData() {
        try {
            await this.collection.insertMany([
                {
                    nombre_completo: "Juan Perez",
                    cargo: "Gerente",
                    direccion: "Calle 123, Ciudad",
                    email: "juan@example.com",
                    telefono: "123-456-7890",
                    area_asignada: "Ventas",
                    zona: "Norte",
                    jornada: "Mañana",
                },
                {
                    nombre_completo: "Maria Lopez",
                    cargo: "Analista",
                    direccion: "Avenida 456, Otra Ciudad",
                    email: "maria@example.com",
                    telefono: "987-654-3210",
                    area_asignada: "Desarrollo",
                    zona: "Sur",
                    jornada: "Tarde",
                },
                {
                    nombre_completo: "Carlos Rodriguez",
                    cargo: "Técnico",
                    direccion: "Calle 789, Ciudad",
                    email: "carlos@example.com",
                    telefono: "555-555-5555",
                    area_asignada: "Soporte",
                    zona: "Este",
                    jornada: "Noche",
                },
                {
                    nombre_completo: "Laura Gomez",
                    cargo: "Diseñadora",
                    direccion: "Calle 456, Ciudad",
                    email: "laura@example.com",
                    telefono: "123-987-6543",
                    area_asignada: "Diseño",
                    zona: "Oeste",
                    jornada: "Mañana",
                },
                {
                    nombre_completo: "Pedro Ramirez",
                    cargo: "Desarrollador",
                    direccion: "Avenida 789, Ciudad",
                    email: "pedro@example.com",
                    telefono: "789-123-4560",
                    area_asignada: "Desarrollo",
                    zona: "Centro",
                    jornada: "Tarde",
                },
            ]);
        } catch (error) {
            console.log(error);
            new ClientError(`Error al generar la colección de ${this.entity}`);
            throw error.message;
        }
    }
}
export default EmpleadosSchema;
