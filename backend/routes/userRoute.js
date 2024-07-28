const express = require('express');

const { createUser, getUserDetails } = require('../controller/userController')
const router = express.Router();

router.post("/users", createUser);
router.post("/users/:id", getUserDetails);

module.exports = router
