var db = require("../db.js")

module.exports = app => {
    app.route("/insert-pet")
        .post((req, res) => {
            app.db.connection.query("SELECT u179156626_anima.insert_pet(:nome,:nascimento,:raca,:pelagem,:cor,:sexo,:dono,:especie) as 'pet_id'",
                { replacements: { nome: req.body.nome, nascimento: req.body.nascimento, raca: req.body.raca, pelagem: req.body.pelagem, cor: req.body.cor, sexo: req.body.sexo, dono: req.body.dono, especie: req.body.especie } })
                .spread((results, metadata) => {
                    res.send({insert_pet: results})
                })
        })
}
