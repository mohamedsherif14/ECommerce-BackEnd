const categoryControler = require('../controlers/category.controler');
const authentication = require('../middlewares/auth.middlewares')
const authorized = require('../middlewares/role.middleware')
const express = require('express')
const router = express.Router()


router.route('/')
    .get(categoryControler.getCategorys)
    .post(authentication,authorized('admin'),categoryControler.addCategory)

router.patch("/delet/:id",authentication,authorized('admin'),categoryControler.deleteCategory)
router.patch("/toggleActive/:id",authentication,authorized('admin'),categoryControler.toggleCategoryActive)

module.exports = router