module.exports = (sequelize, DataType) => {
    const Logradouro= sequelize.define("Logradouro", {
        logradouro_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        logradouro_nome: {
            type: DataType.STRING,
            allowNull: false
        },
        logradouro_cep: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Logradouro.hasMany(models.LogradouroTipo, {foreingKey: 'fk_logradouro_tipo_id'})
                Logradouro.hasMany(models.Bairro, {foreingKey: 'fk_bairro_id'})
            }
        }
    })
    return Logradouro
}