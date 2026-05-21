const subCategoryControler = require('../controlers/subCategory.controler');
const authentication = require('../middlewares/auth.middlewares')
const authorized = require('../middlewares/role.middleware')
const express = require('express');
const { post } = require('./auth.route');
const router = express.Router()

router.route('/')
    .get(subCategoryControler.getSubCategorys)
    .post(authentication,authorized('admin'),subCategoryControler.addSubCategory)

router.patch("delet/:id",authentication,authorized('admin'),subCategoryControler.deletSubCategory)
router.patch("toggleActive/:id",authentication,authorized('admin'),subCategoryControler.toggleSubCategoryActive)

module.exports = router