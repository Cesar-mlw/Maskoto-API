var sequelize = require('../db.js')

module.exports = app => {
    app.route("/vet_all")
        .get((req, res) => {
            sequelize.query("SELECT * FROM u179156626_anima.veterinario_all", {type: sequelize.QueryTypes.SELECT})
                .then(vet => res.json(vet))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}