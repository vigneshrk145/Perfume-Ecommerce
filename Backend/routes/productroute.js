const express = require('express');
const router = express.Router();
const {createProduct,addProduct}= require('../controller/proudctcontroler')
const upload = require('../configure/upload')


// Get all products
router.get('/getproducts',createProduct)
router.post('/addproduct',upload.single('image'),addProduct)



module.exports = router;