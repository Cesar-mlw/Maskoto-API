var db = require("../db.js")

module.exports = app => {
    app.route("/insert-user")
        .post((req, res) => {
            db.connection.query('select u179156626_anima.insert_user(?,?,?,?,?,?) AS "id";',
                { replacements: { nome: req.body.nome, doc: req.body.doc, telefone: req.body.telefone, senha: req.body.senha, email: req.body.email, tipo: req.body.tipo } }).spread((results, metadata) => {
                    res.send({user_insert: reuslts})
                })
        })
}
