import { check } from "express-validator";

export const CheckPostAllEvents= [

    check("fecha")
    .notEmpty().withMessage("El campo date es Obligatorio")
    .isString().withMessage("El campo date debe ser de tipo String")
    .matches(/^(?:\\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])$/).withMessage("Solo admite numeros en formato 0000-00-00 "),

    check("estado")
    .notEmpty().withMessage("El campo state es Obligatorio")
    .isString().withMessage("El campo state debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("area")
    .notEmpty().withMessage("El campo belonging_area es Obligatorio")
    .isString().withMessage("El campo belonging_area debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("descripcion")
    .notEmpty().withMessage("El campo description_info es Obligatorio")
    .isString().withMessage("El campo description_info debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("hora_inicio")
    .notEmpty().withMessage("El campo start_time es Obligatorio")
    .isString().withMessage("El campo start_time debe ser de tipo String")
    .matches(/^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$/).withMessage("Solo admite letras"),

    check("hora_finalizacion")
    .notEmpty().withMessage("El campo end_time es Obligatorio")
    .isString().withMessage("El campo end_time debe ser de tipo String")
    .matches(/^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$/).withMessage("Solo admite letras"),
]


