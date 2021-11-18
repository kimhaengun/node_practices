const express = require('express');
const controllers = require('../controllers/user');

const router = express.Router();

router.route('/join').get(controllers.join);
router.route('/join').post(controllers._join);
router.route('/joinsuccess').get(controllers.joinsucess);
router.route('/login').get(controllers.login);
router.route('/login').post(controllers._login);
router.route('/logout').get(controllers.logout);


module.exports=router;