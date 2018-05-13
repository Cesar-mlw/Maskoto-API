module.exports = (sequelize, DataType) => {
    const Telefone = sequelize.define("Telefone", {
        telefone_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            
        },
        telefone_ddd: {
            type: DataType.INTEGER,

        },
        telefone_numero: {
            type: DataType.STRING,
            
        }

    })
}