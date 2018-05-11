module.exports = app => {
    app.route("/vet_all/:id")
        .get((req, res) => {
            sequelize.query("SELECT * u179156626_anima.veterinario_all", {type: sequelize.QueryTypes.SELECT})
                .then(vet => res.json(vet))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}