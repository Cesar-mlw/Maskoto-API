module.exports = (sequelize, DataType) => {
    const Exame = sequelize.define("Exame", {
        exame_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        exame_datetime: {
            type: DataType.DATE,
            allowNull: false    
        }
    }, {
        classMethods: {
            associate: (models) => {
                Exame.hasMany(models.Pet, {foreingKey: 'fk_pet_id'})
                Exame.hasMany(models.ExameTipo, {foreingKey: 'fk_exame_tipo'})
            }
        }
    })
}