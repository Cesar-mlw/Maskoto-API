module.exports = (sequelize, DataType) => {
    const EnderecoTipo= sequelize.define("EnderecoTipo", {
        endereco_tipo_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        endereco_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return EnderecoTipo
}