const express = require('express');
const router = express.Router();
const userController = require("../controllers/usersController");

//router.get('/users', userController.getAllExistingUsers);
//
//router.get('/usersController/add', userController.getAddUsers);
//
//router.get('/usersController/:id', userController.getUsers);

router.post('/usersController/add', userController.postAddUsers);

//matthew's stuff below

router.post('/', userController.post);

router.get('/register', userController.getRegister);

router.post('/register', userController.postRegister);

//router.route('/home').get(userController.getHome);
router.post('/home', userController.postHome);

router.get('/home', userController.goHome);

router.post('/postings', userController.postPosting);

router.get('/profile', userController.getProfile);

router.post('/profile', userController.getProfile);

router.post('/message', userController.postMessage);


router.get('/inbox', userController.getInbox);

module.exports = router;
