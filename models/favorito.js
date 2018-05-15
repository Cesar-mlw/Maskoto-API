module.exports = (sequelize, DataType) => {
    const Favorito = sequelize.define("Favorito", {
        favorito_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    }, {
        classMethods: {
            associate: (models) => {
                Favorito.hasMany(models.Usuario, {foreingKey: 'fk_usuario_id_dono'})
                Favorito.hasMany(models.Usuario, {foreingKey: 'fk_usuario_id_veterinario'})
            }
        }
    })
}