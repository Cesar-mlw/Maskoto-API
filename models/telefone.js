module.exports = (sequelize, DataType) => {
    const Telefone = sequelize.define("Telefone", {
        telefone_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
            
        },
        telefone_ddd: {
            type: DataType.INTEGER,
            allowNull: false

        },
        telefone_numero: {
            type: DataType.STRING,
            allowNull: false
            
        }

    }, {
        classMethods: {
            associate: (models) => {
                Telefone.hasMany(models.Usuario, {foreingKey: 'fk_usuario_id'})
                Telefone.hasMany(models.TelefoneTipo, {foreingKey: 'fk_telefone_tipo_id'})
            }
        }
    })
}