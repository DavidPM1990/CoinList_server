module.exports = (app) => {

    app.use('/user', require('./user.routes'))

    app.use('/coins', require('./coins.routes'))

}











