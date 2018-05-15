module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("Usuario", {
        usuario_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuario_nome: {
            type: DataType.STRING,
            allowNull: false

        },
        usuario_nascimento: {
            type: DataType.DATEONLY,
            allowNull: false

        },
        usuario_senha: {
            type: DataType.STRING(90),
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Usuario.hasMany(models.UsuarioTipo, {foreingKey: 'fk_usuario_tipo_id'})
                Usuario.hasMany(models.UsuarioStatus, {foreingKey: 'fk_usuario_status_id'})
                Usuario.hasMany(models.Sexo, {foreingKey: 'fk_sexo_id'})
            }
        }
    })
    return Usuario
}