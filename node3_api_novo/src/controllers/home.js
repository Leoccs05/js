//importando a tabela
import Aluno from "../models/Aluno"

class HomeController{
  async index(req, res){
    const novoAluno = await Aluno.create({
    name: "Mateus",
    age: 19,
    })
  res.json(novoAluno)
}}

export default new HomeController()
