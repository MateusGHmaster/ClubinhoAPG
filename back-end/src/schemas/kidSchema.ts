import Joi from 'joi';

export const kidSchema = Joi.object({
    
    name: Joi.string().required(),
    birthDate: Joi.string().required(),
    guardianId: Joi.number().required()

});

export const guardianSchema = Joi.object({

    name: Joi.string().required(),
    phone: Joi.string().required()

});