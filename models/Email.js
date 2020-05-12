module.exports = (sequelize, DataTypes) =>{
    const Email = sequelize.define("Email",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        email: DataTypes.STRING, //como tem comente um tipo pode ser codado sem declarar como obj {} igual acima
        senha: DataTypes.STRING,
    },{
        tableName:'email',  //para tabelas que não tem o nome em plural
        timestamps:false    // obrigatorio nas tabelas que não contem dados de timestamps senão o sequelize  tenta achar na tabela
    });
    return Email

}
