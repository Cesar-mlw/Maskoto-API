module.exports = app => {
    app.route("/vac_all/:id")
        .get((req, res) => {
            sequelize.query("SELECT * u179156626_anima.vacina_all", {type: sequelize.QueryTypes.SELECT})
                .then(vac => res.json(vac))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}