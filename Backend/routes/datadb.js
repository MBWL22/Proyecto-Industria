const express = require('express');
const router  = express.Router();

const { services } = require('../controllers/datadb')

router.route("/services/:category").get(services);
 
module.exports = router;