const express = require('express');
const controllers = require('../controllers/main');

const router = express.Router();
router.route('').get(controllers.index);
module.exports=router;