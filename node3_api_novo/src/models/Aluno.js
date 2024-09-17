//importando o metodo de tipos de dados para criar a tabela que vai ser usada
const { DataTypes } = require("sequelize");

//necessário a conexão com o banco de dados, pois é lá aonde vai ser criada a
//tabela
const db = require("../config/database");

//criando a tabela
const Aluno = db.define("Aluno", {
    //criando as colunas
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        required: true,
    },
});

//importando a tabela
module.exports = Aluno;
