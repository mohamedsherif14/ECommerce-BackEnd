const userControler = require('../controlers/user.controler');
const authentication = require('../middlewares/auth.middlewares')
const authorized = require('../middlewares/role.middleware')
const express = require('express')
const router = express.Router()

router.route('/')
    .post(userControler.addUser("user"))
    .get(authentication,authorized('admin'),userControler.getUsers)
router.post('/addAdmin',authentication,authorized('admin'),userControler.addUser("admin"))
module.exports = router