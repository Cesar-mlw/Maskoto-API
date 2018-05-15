module.exports = (sequelize, DataType) => {
    const UsuarioTipo= sequelize.define("UsuarioTipo", {
        usuario_tipo_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return UsuarioTipo
}