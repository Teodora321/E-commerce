const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/products', controllers.products.getAll);
// router.get('/details/:id', controllers.products.getDetails)

module.exports = router;