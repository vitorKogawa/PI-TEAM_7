const { Router } = require('express');
const user_router = Router();
const user_controller = require('../controller/usuario.controller');

user_router.post('/usuario', user_controller.create);

module.exports = { user_router };
