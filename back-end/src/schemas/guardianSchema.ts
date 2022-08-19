import Joi from 'joi';

export const guardianSchema = Joi.object({

    guardianName: Joi.string().required(),
    guardianPhone: Joi.number().required()

});