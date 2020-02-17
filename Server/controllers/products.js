const models = require('../models');

module.exports = {
    getAll: (req, res, next) => {
        models.Product.find().populate('user')
            .then(products => res.send(products))
            .catch(next)
    },
    getDetails : (req,res,next) =>{
        models.Product.findById(req.params.id)
        .then(item=> res.send(item))
        .catch(next)
    },
    
}