module.exports = (sequelize, DataType) => {
    const Continente = sequelize.define("Continente", {
       continente_id: {
           type: DataType.INT,
           primaryKey: true,
           allowNull: false,
           autoIncrement: true
       },
       continente_nome: {
           type: DataType.STRING,
           allowNull: false,
       }
    })
    return Continente
}