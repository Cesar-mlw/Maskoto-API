module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define("Endereco", {
        endereco_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        endereco_numero: {
            type: DataType.STRING,
            allowNull: false,
        },
        endereco_complemento: {
            type: DataType.STRING,
        }
    }, {
        classMethods: {
            associate: (models) => {
                Endereco.hasMany(models.Logradouro, {foreingKey: 'fk_logradouro_id'})
                Endereco.hasMany(models.EnderecoTipo, {foreingKey: 'fk_edereco_tipo_id'})
            }
        }
    })
}