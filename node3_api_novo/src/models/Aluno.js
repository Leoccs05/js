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
        validate:{
          len:{
            args: [3,255],
            msg: 'Nome precisa ter entre 3 e 255'
          }
        }
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:{
          args: [3,255],
          msg: 'Nome precisa ter entre 3 e 255'
        }
      }

    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique:{
        msg: 'E-mail já existe',
      },
      validate:{
        isEmail:{
          msg: 'Email invalido',
        }
      }
    },
    idade: {
        type: DataTypes.INTEGER,
        required: true,
        validate:{
          isInt:{
            msg: 'Idade precisa ser um numero inteiro'
          }
        }
    },
    peso: {
      type: DataTypes.FLOAT,
      required: true,
      validate:{
        isFloat:{
          msg: 'Peso precisa ser um numero'
        }
      }
    },
    altura: {
      type: DataTypes.FLOAT,
      required: true,
      validate:{
        isFloat:{
          msg: 'Altura precisa ser um numero'
        }
      }
    },
});

Aluno.associate = (models) => {
  Aluno.hasMany(models.Foto, { foreignKey: 'aluno_id' });
};

//Sincronizar tabela com banco de dados
(async () => {
  await db.sync({ alter: true });
})();

//importando a tabela
module.exports = Aluno;
