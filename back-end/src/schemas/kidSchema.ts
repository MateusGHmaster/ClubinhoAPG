import Joi, { boolean, string } from 'joi';

export const kidSchema = Joi.object({
    
    name: Joi.string().required(),
    birthDate: Joi.string().required(),
    guardianId: Joi.number().required()

});

export const guardianSchema = Joi.object({

    name: Joi.string().required(),
    phone: Joi.string().required()

});

export const presenceSchema = Joi.object({

    kidId: Joi.number().required(),
    date: Joi.string().required(),
    isPresent: Joi.boolean().default(false).required()

});