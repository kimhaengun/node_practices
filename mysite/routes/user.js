const express = require('express');
const controllers = require('../controllers/user');

const router = express.Router();

router.route('/join').get(controllers.join);
router.route('/join').post(controllers._join);
router.route('/joinsuccess').post(controllers.joinsucess);

module.exports=router;