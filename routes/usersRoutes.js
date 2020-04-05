const express = require('express');
const router = express.Router();
const userController = require("../controllers/usersController");

router.get('/users', userController.getAllUsers);

router.get('/usersController/add', userController.getAddUsers);

router.get('/usersController/:id', userController.getUsers);

router.post('/usersController/add', userController.postAddUsers);

module.exports = router;