const express = require('express');
<<<<<<< HEAD
const router = express.Router();
const userController = require("../controllers/usersController");

router.get('/users', userController.getAllExistingUsers);

router.get('/usersController/add', userController.getAddUsers);

router.get('/usersController/:id', userController.getUsers);

router.post('/usersController/add', userController.postAddUsers);

module.exports = router;
=======

const router = express.Router();
const userController = require('../controllers/');
>>>>>>> 0b20d14a06fc643401675c4b19ae0df6bbcad1a3
