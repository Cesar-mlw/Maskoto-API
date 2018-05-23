module.exports = app => {
    app.db.connection.sync().done( () => {
        app.listen(app.get("port"), () => {
            console.log(`Welcome to Maskoto-API! - Listening on Port ${app.get("port")}`);
        })
    })
}