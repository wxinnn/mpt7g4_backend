const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

router.get('/', UserController.user_getAll);

router.post('/signup', UserController.user_signup);

router.post('/login', UserController.user_login);

router.post('/diagnosed', UserController.user_diagnosed);

router.post('/:userId', UserController.user_update);

module.exports = router;