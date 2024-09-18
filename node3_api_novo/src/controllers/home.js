//importando a tabela
import Aluno from "../models/Aluno"

class HomeController{
  async index(req, res){
    const novoAluno = await Aluno.create({
    nome: "Mateus",
    idade: 19,
    sobrenome: "Santin",
    email: "matheus_santin@gmail.com",
    peso: 80,
    altura: 1.78
    })
  res.json(novoAluno)
}}

export default new HomeController()
