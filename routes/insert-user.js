var db = require("../db.js")

module.exports = app => {
    app.route("/insert-user")
        .post((req, res) => {
            app.db.connection.query('select maskoto.insert_user(:nome, :doc,:telefone,:senha,:email,:tipo) AS "user_id";',
                { replacements: { nome: req.body.nome, doc: req.body.doc, telefone: req.body.telefone, senha: req.body.senha, email: req.body.email, tipo: req.body.tipo } }).spread((results, metadata) => {
                    res.send({user_insert: results})
                })
        })
}
