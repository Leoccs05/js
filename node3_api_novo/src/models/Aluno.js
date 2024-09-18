//importando o metodo de tipos de dados para criar a tabela que vai ser usada
const { DataTypes } = require("sequelize");

//necessário a conexão com o banco de dados, pois é lá aonde vai ser criada a
//tabela
const db = require("../config/database");

//criando a tabela
const Aluno = db.define("Aluno", {
    //criando as colunas
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        required: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
    },
    peso: {
      type: DataTypes.FLOAT,
      required: true,
    },
    altura: {
      type: DataTypes.FLOAT,
      required: true,
    },
});

//Sincronizar tabela com banco de dados
(async () => {
  await db.sync({ alter: true });
})();

//importando a tabela
module.exports = Aluno;
