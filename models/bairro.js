module.exports = (sequelize, DataType) => {
    const Bairro = sequelize.define("Bairro", {
        bairro_id: {
            type: DataType.INT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        bairro_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Bairro.hasMany(models.Cidade, {foreingKey: 'fk_cidade_id'})
            }
        }
    })
    return Bairro
}