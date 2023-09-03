import { check } from "express-validator";

export const RestauranteCafeteriasDTO= [

    check("product")
    .notEmpty().withMessage("El campo product es Obligatorio")
    .isString().withMessage("El campo product debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("description")
    .notEmpty().withMessage("El campo description es Obligatorio")
    .isString().withMessage("El campo description debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("amount")
    .notEmpty().withMessage("El campo amount es Obligatorio")
    .isNumeric().withMessage("El campo amount debe ser de tipo Int")
    .matches(/^[0-9,.#@\\s-]+$/).withMessage("Solo admite numeros"),

    check("price")
    .notEmpty().withMessage("El campo price es Obligatorio")
    .isNumeric().withMessage("El campo price debe ser de tipo Int")
    .matches(/^[0-9,.#@\\s-]+$/).withMessage("Solo admite numeros"),

    check("place")
    .notEmpty().withMessage("El campo place es Obligatorio")
    .isString().withMessage("El campo place debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),

    check("schedule")
    .notEmpty().withMessage("El campo schedule es Obligatorio")
    .isString().withMessage("El campo schedule debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]*$/).withMessage("Solo admite letras"),
]


