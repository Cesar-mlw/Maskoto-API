module.exports = (sequelize, DataType) => {
    const Email= sequelize.define("Email", {
        email_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email_email: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Email.hasMany(models.Usuario, {foreingKey: 'fk_usuario_id'})
                Email.hasMany(models.EmailTipo, {foreingKey: 'fk_email_tipo_id'})
            }
        }
    })
    return Email
}