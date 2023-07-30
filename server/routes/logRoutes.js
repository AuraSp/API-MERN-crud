const express = require('express');

const {
    addlog
} = require('./../controllers/logController');

const router = express.Router();

router.route('/postlogs').post(addlog);

module.exports = router;