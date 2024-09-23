import Aluno from './Aluno'
import appConfig from '../config/appConfig';
//importando o metodo de tipos de dados para criar a tabela que vai ser usada
const { DataTypes} = require("sequelize");

//necessário a conexão com o banco de dados, pois é lá aonde vai ser criada a
//tabela
const db = require("../config/database");

//criando a tabela
const Foto = db.define("Foto", {
    //criando as colunas
    originalname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{
            msg: 'Campo nao pode ficar vazio'
          }
        }
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg: 'Campo nao pode ficar vazio'
        }
      }
  },
  url:{
    type: DataTypes.VIRTUAL,
    get(){
        return `${appConfig.url}/images/${this.getDataValue('filename')}`
    }
  }
});

Foto.associate = (models) => {
  Foto.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
};


//Sincronizar tabela com banco de dados
(async () => {
  await db.sync({ alter: true });
})();

//importando a tabela
module.exports = Aluno;
