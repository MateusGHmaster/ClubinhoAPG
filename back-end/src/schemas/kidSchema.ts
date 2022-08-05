import Joi from 'joi';

export const kidSchema = Joi.object({
    
    name: Joi.string().required(),
    birthDate: Joi.date().required()

});

export const guardianSchema = Joi.object({

    name: Joi.string().required(),
    phone: Joi.string().min(9).max(11).required()

});