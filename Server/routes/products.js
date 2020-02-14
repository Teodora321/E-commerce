const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/products', controllers.products.getAll);
router.get('/detail/:id', controllers.products.getDetails)

module.exports = router;