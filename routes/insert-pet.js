var db = require("../db.js")

module.exports = app => {
    app.route("/insert-pet/")
        .post((req, res) => {
            db.connection.query("CALL u179156626_anima.insert_pet(?,?,?,?,?,?,?,?)",
                { replacements: { nome: req.body.nome, nascimento: req.body.nascimento, raca: req.body.int, pelagem: erq.body.pelagem, cor: req.body.cor, sexo: req.body.sexo, dono: erq.body.dono, especie: req.body.especie } })
                .spread((results, metadata) => {
                    res.send({insert_pet: results})
                })
        })
}
