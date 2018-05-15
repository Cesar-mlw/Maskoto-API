module.exports = (sequelize, DataType) => {
    const Dono = sequelize.define("Dono", {
        dono_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        dono_datetime: {
            type: DataType.DATE,
            allowNull
        }
    }, {
        classMethods: {
            associate: (models) => {
                Dono.hasMany(models.Pet, {foreingKey: 'fk_pet_id'})
                Dono.hasMany(models.Usuario, {foreingKey: 'fk_usuario_id'})
                Dono.hasMany(models.DonoTipo, {foreingKey: 'fk_dono_tipo_id'})
            }
        }
    })
    return Dono
}