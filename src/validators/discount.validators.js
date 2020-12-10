const Joi = require('joi')
const { statusCodes } = require('../configs')

// add joi schema

const addDiscount = Joi.object().keys({
   productId: Joi.number().required(),
   quantity: Joi.number().required(),
   discountPercent: Joi.number().required()
});

const updateDiscount = Joi.object().keys({
   quantity: Joi.number().required(),
   discountPercent: Joi.number().required()
});



module.exports = {
   addDiscount,
   updateDiscount
}


