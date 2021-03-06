const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        const id = req.params.id;
        models.User.find({ _id: id })
            .then(data => {
                const { email, firstName, lastName } = data[0]; //password is prevent to be sent to the front-end
                userDetails = { email, firstName, lastName, email };
                return userDetails;
            })
            .then((user) => res.send(user))
            .catch(next)
    },

    patch: (req, res, next) => {
        const id = req.params.id;
        const { firstName, lastName, email } = req.body;
        const query = { firstName, lastName, email }
        models.User.findOneAndUpdate({ _id: id }, query, { new: true })
            .then((updatedUser) => res.send(updatedUser))
            .catch(err => console.log(err))
    },

    add: (req, res, next) => {
        const userId = req.params.id;
        const product = req.body;
        models.User.updateOne({ _id: userId }, { $push: { cart: product } })
            .then(resp => res.send(resp))  
    },
    
    getCartItems: (req, res, next) => {
        const userId = req.params.id;
        models.User.find({ _id: userId }).populate('cart')
            .then(data => {
                const { cart } = data[0]
                res.send(cart)
            })
    },

    deleteCart: (req, res, next) => {
        const userId = req.params.id;
        models.User.findOneAndUpdate({ _id: userId }, { cart: [] })
            .then(resp => res.send(resp))
    },

    delete: (req, res, next) => {
        const id = req.params.id
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .then(() => {
                res.clearCookie(config.authCookieName)
            })
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { email, firstName, lastName, password } = req.body;
            models.User.create({ email, firstName, lastName, password })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
        },

        login: (req, res, next) => {
            const { email, password } = req.body;
            models.User.findOne({ email }).populate('cart')
                .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }
                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send({ logoutSuccess: true });
                })
                .catch(next);
        },
    }

};