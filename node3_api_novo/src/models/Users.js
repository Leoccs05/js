import bcryptjs from 'bcryptjs'

//importando o metodo de tipos de dados para criar a tabela que vai ser usada
const { DataTypes } = require("sequelize");

//necessário a conexão com o banco de dados, pois é lá aonde vai ser criada a
//tabela
const db = require("../config/database");

//criando a tabela
const Users = db.define("Users", {
    //criando as colunas
    nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len:{
            args: [3, 255],
            msg: 'Campo deve ter entre 3 e 255 caracteres'
          }
        }
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: '',
      unique: {
        msg: 'Email já cadastrado',
      },
        validate: {
          isEmail:{
            msg: 'Email invalido'
          }
        }
    },
    password_hash:{
      type: DataTypes.STRING,
      defaultValue: '',
  },
    password: {
      type: DataTypes.VIRTUAL,
      defaultValue: '',
      validate: {
        len:{
          args: [6, 50],
          msg: 'A senha precisa ter entre 6 e 50 caracteres'
        }
      }
  },
});

// Adicionando o hook antes de salvar
Users.addHook('beforeSave', async (user) => {
  if (user.password) {
      user.password_hash = await bcryptjs.hash(user.password, 8);
  }
});

//Sincronizar tabela com banco de dados
(async () => {
  await db.sync({ alter: true });
})();

//importando a tabela
module.exports = Users;
