module.exports = (sequelize, DataType) => {
    const Observacao = sequelize.define("Observacao", {
        observacao_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        observacao_text: {
            type: DataType.TEXT,
            allowNull: false
        }
    })
}