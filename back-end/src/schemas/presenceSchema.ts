import Joi from 'joi';

export const presenceSchema = Joi.object({

    kidId: Joi.number().required(),
    date: Joi.string().required(),
    isPresent: Joi.boolean().required()

});