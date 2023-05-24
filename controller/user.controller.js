const Usuario = require('../models/User.model');
const bcrypt = require('bcryptjs');
const { signJwt } = require('../utils/jwt.util');
const SALT = +process.env.SALT


const createUser = (req, res, next) => {
    const { email, password, nombre } = req.body;
    Usuario.findOne({ email })
        .then((user) => {
            if (user) {
                throw new Error('Email ya en uso');
            }
            const saltBcrypt = bcrypt.genSaltSync(SALT);
            const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);

            return Usuario.create({ email, password: hashBcrypt, nombre });
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            if (err.message === 'Email in use') {
                res.status(400).json({ errorMessage: err.message });
                return;
            }
            next(err);
        });
};


const findProfile = (req, res, next) => {
    const { nombre, password } = req.body;

    Usuario.findOne({ nombre })
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ token: signJwt(user._id.toString(), user.nombre) });
            } else {
                res.status(400).json({ errorMessage: 'Username or password not valid.' });
            }
        })
        .catch(next);
};


const GetUser = (req, res, next) => {
    if (req.user) {
        Usuario.findById(req.user._id)

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


module.exports = { createUser, findProfile, GetUser }