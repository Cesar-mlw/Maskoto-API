module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("Usuario", {
        usuario_id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        usuario_nome: {
            type: DataType.STRING,

        },
        usuario_nascimento: {
            type: DataType.DATEONLY,

        },
        usuario_senha: {
            type: DataType.STRING(90)
        }
    })
}