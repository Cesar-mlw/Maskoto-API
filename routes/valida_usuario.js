let db = require("../db.js")

module.exports = app => {
    app.route("/validate_user")
        .post((req, res) => {
                app.db.connection.query('SELECT u179156626_anima.valida_usuario(:email, :senha) as "validate"', {replacements: {email: req.body.email, senha: req.body.senha} }).spread((results, metadata) => {
                    res.send({autenticate: results})
                })
            })
        }