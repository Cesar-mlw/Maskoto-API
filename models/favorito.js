module.exports = (sequelize, DataType) => {
    const Favorito = sequelize.define("Favorito", {
        favorito_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    })
}