module.exports = app => {
    app.route("/doe_all/:id")
        .get((req, res) => {
            sequelize.query("SELECT * u179156626_anima.doenca_all", {type: sequelize.QueryTypes.SELECT})
                .then(doe => res.json(doe))
                .catch(error => {
                    res.status(412).json({msg: error.message})
                })
        })
}