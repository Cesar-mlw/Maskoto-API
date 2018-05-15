module.exports = (sequelize, DataType) => {
    const Documento= sequelize.define("Documento", {
        documento_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        documento_documento: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: (models) => {
                Documento.hasMany(models.DocumentoTipo, {foreingKey: 'fk_documento_tipo_id'})
                Documento.hasMany(models.Usuario, {foreingKey: 'fk_usuario_id'})
            }
        }
    })
    return Documento
}
