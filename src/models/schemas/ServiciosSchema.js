import ClientError from "../../utils/ClientError.js";

class ServiciosSchema {
    constructor(database) {
        this.database = database;
        this.entity = "servicios";
        this.collection = this.database.collection(this.entity);
    }

    static properties(){
        return{
            _id: {
                bsonType: 'objectId',
            },
            producto: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo product y este debe ser un string"
            },
            descripcion: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo description y este debe ser un string"
            },
            precio: {
                bsonType: "int",
                minimum: 0,
                maximum: 9999999,
                pattern: "^[0-9,.#@\\s-]+$",
                description: "El campo price debe ser un número y estar comprendido entre 0 y 9999999"
            },
            area: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo belonging_area y este debe ser un string"
            },
            zona: {
                bsonType: "string",
                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                description: "Debe informar el campo zone y este debe ser un string"
            },
            horario_apertura: {
                bsonType: "string",
                pattern: "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$",
                description: "Debe informar el campo opening_hours y este debe ser un string"
            },
            horario_cierre: {
                bsonType: "string",
                pattern: "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$",
                description: "Debe informar el campo closing_time y este debe ser un string"
            }
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
                        required: ["producto", "descripcion", "precio","area", "zona", "horario_apertura", "horario_cierre"],
                        properties: {
                            _id: {
                                bsonType: 'objectId',
                            },
                            producto: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo product y este debe ser un string"
                            },
                            descripcion: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo description y este debe ser un string"
                            },
                            precio: {
                                bsonType: "int",
                                minimum: 0,
                                maximum: 9999999,
                                pattern: "^[0-9,.#@\\s-]+$",
                                description: "El campo price debe ser un número y estar comprendido entre 0 y 9999999"
                            },
                            area: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo belonging_area y este debe ser un string"
                            },
                            zona: {
                                bsonType: "string",
                                pattern: "^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$",
                                description: "Debe informar el campo zone y este debe ser un string"
                            },
                            horario_apertura: {
                                bsonType: "string",
                                pattern: "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$",
                                description: "Debe informar el campo opening_hours y este debe ser un string"
                            },
                            horario_cierre: {
                                bsonType: "string",
                                pattern: "^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$",
                                description: "Debe informar el campo closing_time y este debe ser un string"
                            }
                        }
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
                    producto: "Comida para animales",
                    descripcion: "Alimentación especializada para diferentes especies",
                    precio: 5000,
                    area: "Cuidado de animales",
                    zona: "Área de fauna",
                    horario_apertura: "08:00 am",
                    horario_cierre: "04:00 pm"
                },
                {
                    producto: "Souvenirs",
                    descripcion: "Recuerdos y regalos temáticos del zoológico",
                    precio: 1000,
                    area: "Tienda de regalos",
                    zona: "Área de souvenirs",
                    horario_apertura: "10:00 am",
                    horario_cierre: "06:00 pm"
                },
                {
                    producto: "Visitas guiadas",
                    descripcion: "Recorridos temáticos con guías especializados",
                    precio: 3000,
                    area: "Interacción con visitantes",
                    zona: "Área de visitas",
                    horario_apertura: "09:00 am",
                    horario_cierre: "05:00 pm"
                },
                {
                    producto: "Fotografía de recuerdo",
                    descripcion: "Sesiones de fotos con los animales",
                    precio: 8000,
                    area: "Captura de momentos",
                    zona: "Área fotográfica",
                    horario_apertura: "09:30 am",
                    horario_cierre: "03:30 pm"
                },
                {
                    producto: "Actividades infantiles",
                    descripcion: "Talleres y juegos para niños",
                    precio: 2000,
                    area: "Área infantil",
                    zona: "Zona de juegos",
                    horario_apertura: "11:00 am",
                    horario_cierre: "02:00 pm"
                },
                {
                    producto: "Paseo en tren",
                    descripcion: "Recorrido en tren por el zoológico",
                    precio: 5000,
                    area: "Recorridos temáticos",
                    zona: "Área de tren",
                    horario_apertura: "10:30 am",
                    horario_cierre: "04:30 pm"
                },
                {
                    producto: "Área de picnic",
                    descripcion: "Espacio para disfrutar de comidas al aire libre",
                    precio: 2000,
                    area: "Descanso y alimentación",
                    zona: "Área de picnic",
                    horario_apertura: "09:00 am",
                    horario_cierre: "06:00 pm"
                },
                {
                    producto: "Encuentro con animales",
                    descripcion: "Experiencia cercana con animales seleccionados",
                    precio: 7000,
                    area: "Interacción con animales",
                    zona: "Áreas designadas",
                    horario_apertura: "12:00 pm",
                    horario_cierre: "03:00 pm"
                },
                {
                    producto: "Cursos de fotografía",
                    descripcion: "Clases para aprender a fotografiar la vida silvestre",
                    precio: 10000,
                    area: "Educación ambiental",
                    zona: "Área educativa",
                    horario_apertura: "01:00 pm",
                    horario_cierre: "04:00 pm"
                },
                {
                    producto: "Zona de descanso",
                    descripcion: "Áreas con bancos para relajarse",
                    precio: 9000,
                    area: "Descanso y recreación",
                    zona: "Diversas áreas",
                    horario_apertura: "09:00 am",
                    horario_cierre: "06:00 pm"
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
export default ServiciosSchema;
