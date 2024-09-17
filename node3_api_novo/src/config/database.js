//importando o sequelize
const { Sequelize } = require("sequelize");

//configurando a conexão com o banco de dados
const sequelize = new Sequelize("curso_node", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

//tentando realizar a conexão
try {
    sequelize.authenticate();
    console.log("Conectado na base de dados");
} catch (err) {
    console.log(err);
}

//importando a conexão
module.exports = sequelize;
