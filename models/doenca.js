module.exports = (sequelize, DataType) => {
    const Doenca = sequelize.define("Doenca", {
        doenca_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        doenca_nome: {
            type: DataType.DATE,
            allowNull: false
        }
    })
    return Doenca
}