import Joi from 'joi';

export const kidSchema = Joi.object({
    
    name: Joi.string().required(),
    birthDate: Joi.string().required(),
    guardianId: Joi.number().required()

});
