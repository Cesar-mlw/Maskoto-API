module.exports = (sequelize, DataType) => {
    const LogragouroTipo= sequelize.define("LogragouroTipo", {
        logradouro_tipo_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        logradouro_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return LogragouroTipo
}