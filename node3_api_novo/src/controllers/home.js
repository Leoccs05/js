//importando a tabela
import Aluno from "../models/Aluno"

class HomeController{
  async index(req, res){
    const novoAluno = await Aluno.create({
    nome: "Marcio",
    idade: 19,
    sobrenome: "Marcio",
    email: "Marcio_santin@gmail.com",
    peso: 80,
    altura: 1.78
    })
  res.json(novoAluno)
}}

export default new HomeController()
