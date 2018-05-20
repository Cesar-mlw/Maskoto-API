module.exports = app => {
    app.db.connection.sync().done( () => {
        app.listen(app.get("port"), () => {
            console.log(`Maskoto-API - Porta ${app.get("port")}`);
        })
    })
}