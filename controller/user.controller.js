const Usuario = require('../models/User.model');
const CoinModel = require("../models/coin.model");
const bcrypt = require('bcryptjs');
const { signJwt } = require('../utils/jwt.util');
const { isValidObjectId } = require('mongoose');
const SALT = +process.env.SALT


const createUser = (req, res, next) => {
    const { email, password, userName, fullName, phoneNumber } = req.body;
    Usuario.findOne({ email })
        .then((user) => {
            if (user) {
                throw new Error('This email already have an account.');
            }
            const saltBcrypt = bcrypt.genSaltSync(SALT);
            const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);

            return Usuario.create({ email, password: hashBcrypt, userName, fullName, phoneNumber });
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            if (err.message === 'This email already have an account.') {
                res.status(400).json({ errorMessage: err.message });
                return;
            }
            next(err);
        });
};


const findProfile = (req, res, next) => {
    const { email, password } = req.body;

    Usuario.findOne({ email })
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ token: signJwt(user._id.toString(), user.email) });
            } else {
                res.status(400).json({ errorMessage: 'Username or password not valid.' });
            }
        })
        .catch(next);
};


const GetUser = (req, res, next) => {
    if (req.user) {
        Usuario.findById(req.user._id)
            .populate('favoriteCoins')

            .then((user) => {
                if (user) {
                    res.status(200).json(user)
                } else {
                    res.sendStatus(404);
                }
            })
    } else {
        res.sendStatus(401);
    }
}


const updateProfile = (req, res, next) => {
    const { email, userName, fullName, phoneNumber } = req.body;
    const userId = req.params['id'];

    // console.log('userID:', userId)
    // console.log('req.body:', req.body)


    if (!isValidObjectId(userId)) {
        return res.status(400).json({ errorMessage: 'Invalid user ID' });
    }

    Usuario.findByIdAndUpdate(userId, { email, userName, fullName, phoneNumber }, { new: true })
        .then((updatedUser) => {
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.sendStatus(404);
            }
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: 'Internal server error' });
        });
};

const getFavCoins = (req, res) => {
    const { id } = req.params

    if (!isValidObjectId(id)) {
        return res.status(400).json({ errorMessage: 'Invalid user ID' });
    }

    Usuario
        .findById(id)
        .populate('favoriteCoins')
        .then((userFavs) => {
            if (userFavs) {
                res.status(200).json(userFavs.favoriteCoins);
            } else {
                res.sendStatus(404);
            }
        })
        .catch((err) => {
            res.status(500).json({ errorMessage: 'Internal server error' });
        });
}

const updateFavCoins = (req, res, next) => {
    const { id } = req.params;
    const { favoriteCoins } = req.body;

    console.log('soy el favoriteCoinsssssssssssssssssss', favoriteCoins)

    Usuario.findByIdAndUpdate(id, { $addToSet: { favoriteCoins: { $each: favoriteCoins } } })
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            next(err);
        });
};


const deleteFavCoins = (req, res, next) => {
    const { id } = req.params;
    const { favoriteCoins } = req.body;

    Usuario.findByIdAndUpdate(id, { $pull: { favoriteCoins: { $in: favoriteCoins } } })
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            next(err);
        });
};




module.exports = {
    createUser, findProfile,
    GetUser,
    updateProfile,
    getFavCoins,
    updateFavCoins,
    deleteFavCoins
}