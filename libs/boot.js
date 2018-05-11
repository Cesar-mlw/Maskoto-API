module.exports = app => {
    app.db.sequelize.sync().done( () => {
        app.listen(app.get("port"), () => {
            console.log(`Maskoto-API - Porta ${app.get("port")}`);
        })
    })
}