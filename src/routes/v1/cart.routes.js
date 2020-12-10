const { CartController } = require("../../controllers/index");
const express = require("express");
const cartRoutes = express.Router();
const { verifyToken } = require("../../middleware")
let validator = require('express-joi-validation').createValidator({ passError: true })
const { addItem, getCart } = require('../../validators').cart;





cartRoutes.post('/item',validator.body(addItem), CartController.addItem);

cartRoutes.get('/:cartId/:userId', validator.params(getCart), CartController.getCartDetails);

cartRoutes.get('/',  validator.query(getCart),CartController.getCartDetails);

//cartRoutes.delete('/item', /*validator.body(removeItem),*/ CartController.removeItem);

module.exports = cartRoutes;
