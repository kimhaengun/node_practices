const express = require('express');
const controllers = require('../controllers/user');

const router = express.Router();

router.route('/join').get(controllers.join);

module.exports=router;