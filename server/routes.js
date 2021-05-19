const express = require('express');
const UserController = require('./controller/UserController');
const router = express.Router();

router.post("/signup", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
module.exports = router;