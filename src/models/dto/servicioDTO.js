import { check } from "express-validator";

export const CheckPostAllServicios= [

    check("producto")
    .notEmpty().withMessage("El campo product es Obligatorio")
    .isString().withMessage("El campo product debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("descripcion")
    .notEmpty().withMessage("El campo description es Obligatorio")
    .isString().withMessage("El campo description debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("cantidad")
    .notEmpty().withMessage("El campo amount es Obligatorio")
    .isNumeric().withMessage("El campo amount debe ser de tipo Int")
    .matches(/^[0-9,.#@\\s-]+$/).withMessage("Solo admite numeros"),

    check("precio")
    .notEmpty().withMessage("El campo price es Obligatorio")
    .isNumeric().withMessage("El campo price debe ser de tipo Int")
    .matches(/^[0-9,.#@\\s-]+$/).withMessage("Solo admite numeros"),

    check("area")
    .notEmpty().withMessage("El campo belonging_area es Obligatorio")
    .isString().withMessage("El campo belonging_area debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("zona")
    .notEmpty().withMessage("El campo zone es Obligatorio")
    .isString().withMessage("El campo zone debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("horario_apertura")
    .notEmpty().withMessage("El campo opening_hours es Obligatorio")
    .isString().withMessage("El campo opening_hours debe ser de tipo String")
    .matches(/^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$/).withMessage("Solo admite letras"),

    check("horario_cierre")
    .notEmpty().withMessage("El campo closing_time es Obligatorio")
    .isString().withMessage("El campo closing_time debe ser de tipo String")
    .matches(/^(0?[1-9]|1[0-2]):[0-5]\\d\\s?(am|pm|AM|PM)$/).withMessage("Solo admite letras"),
]

