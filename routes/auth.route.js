const authControler = require('../controlers/auth.controler');
const express = require('express');
const router = express.Router()

router.route("/login")
    .post(authControler.login)

    module.exports = router