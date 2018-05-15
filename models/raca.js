module.exports = (sequelize, DataType) => {
    const Raca= sequelize.define("Raca", {
        raca_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        raca_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return Raca
}