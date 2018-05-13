module.exports = (sequelize, DataType) => {
    const ExameComponente = sequelize.define("ExameComponente", {
        exame_componente_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        exame_componente_valor: {
            type: DataType.STRING,
            allowNull: false
        }
    })
}