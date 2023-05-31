const validateToken = require('../middleware/validateToken.middleware');

module.exports = (app) => {

    app.use('/auth', require('./user.routes'))

    app.use('/profile', validateToken, require('./profile.routes'))

    app.use('/coins', require('./coins.routes'))

}











