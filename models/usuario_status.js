module.exports = (sequelize, DataType) => {
    const UsuarioStatus= sequelize.define("UsuarioStatus", {
        usuario_status_id: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_status_nome: {
            type: DataType.STRING,
            allowNull: false
        }
    })
    return UsuarioStatus
}