import { check } from "express-validator";

export const PasesDTO= [

    check("name")
    .notEmpty().withMessage("El campo name es Obligatorio")
    .isString().withMessage("El campo name debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("type")
    .notEmpty().withMessage("El campo type es Obligatorio")
    .isString().withMessage("El campo type debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("description")
    .notEmpty().withMessage("El campo description es Obligatorio")
    .isString().withMessage("El campo description debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("zone")
    .notEmpty().withMessage("El campo zone es Obligatorio")
    .isString().withMessage("El campo zone debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("prices")
    .notEmpty().withMessage("El campo prices es Obligatorio")
    .isNumeric().withMessage("El campo prices debe ser de tipo Int")
    .matches(/^[0-9,.#@\\s-]+$/).withMessage("Solo admite numeros"),

    check("schedule")
    .notEmpty().withMessage("El campo schedule es Obligatorio")
    .isNumeric().withMessage("El campo schedule debe ser de tipo Int")
    .matches(/^.*$/).withMessage("Solo admite numeros"),

    check("days_opening")
    .notEmpty().withMessage("El campo days_opening es Obligatorio")
    .isString().withMessage("El campo days_opening debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),
]


