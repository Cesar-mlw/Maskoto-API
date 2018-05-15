module.exports = (sequelize, DataType) => {
    const DoencaPet = sequelize.define("DoencaPet", {
        doenca_pet_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        doenca_pet_datetime: {
            type: DataType.DATE,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                DoencaPet.hasMany(models.Pet, {foreingKey: 'fk_pet_id'})
                DoencaPet.hasMany(model.Doenca, {foreingKey: 'fk_doenca_id'})
                DoencaPet.hasMany(model.Tipo_Doenca, {foreingKey: 'fk_tipo_doenca_id'})
            }
        }
    })
    return DoencaPet
}