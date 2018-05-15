module.exports = (sequelize, DataType) => {
    const DocumentoTipo= sequelize.define("DocumentoTipo", {
        documento_tipo_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        documento_tipo_nome: {
            type: DataType.STRING,
            allowNull: false
        },
        docuemnto_tipo_duplicidade: {
            type: DataType.TINYINT,
            allowNull:false
        }
    })
    return DocumentoTipo
}