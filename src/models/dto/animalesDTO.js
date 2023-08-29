import { check } from "express-validator";

export const CheckPostAllAnimals= [

    check("nombre")
    .notEmpty().withMessage("El campo name es Obligatorio")
    .isString().withMessage("El campo name debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("especie")
    .notEmpty().withMessage("El campo species es Obligatorio")
    .isString().withMessage("El campo species debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("clase")
    .notEmpty().withMessage("El campo class es Obligatorio")
    .isString().withMessage("El campo class debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("sub_clase")
    .notEmpty().withMessage("El campo sub_class es Obligatorio")
    .isString().withMessage("El campo sub_class debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("pais_origen")
    .notEmpty().withMessage("El campo origin es Obligatorio")
    .isString().withMessage("El campo origin debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("estado")
    .notEmpty().withMessage("El campo state es Obligatorio")
    .isString().withMessage("El campo state debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("dato_curioso")
    .notEmpty().withMessage("El campo curiosity es Obligatorio")
    .isString().withMessage("El campo curiosity debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("zona")
    .notEmpty().withMessage("El campo zone es Obligatorio")
    .isString().withMessage("El campo zone debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras"),

    check("area")
    .notEmpty().withMessage("El campo belonging_area es Obligatorio")
    .isString().withMessage("El campo belonging_area debe ser de tipo String")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ,.#@\\s-]+$/).withMessage("Solo admite letras")
]


