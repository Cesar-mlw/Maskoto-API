module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define("Endereco", {
        endereco_id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        endereco_numero: {
            type: DataType.STRING,
            allowNull: false,
        },
        endereco_complemento: {
            type: DataType.STRING,
        }
    })
}