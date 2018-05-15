module.exports = (sequelize, DataType) => {
    const Peso= sequelize.define("Peso", {
        peso_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        peso_peso: {
            type: DataType.DECIMAL,
            allowNull: false
        },
        peso_datetime: {
            type: DataType.DATE,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Peso.hasMany(models.Pet, {foreingKey: 'fk_pet_id'})
                Peso.hasMany(models.Unidade, {foreingKey: 'fk_unidade_id'})
            }
        }
    })
    return Peso
}