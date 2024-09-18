//importando a tabela
import Users from "../models/Users"

class UserController{
  async store(req, res){
    try{
      const novoUsers = await Users.create({
        nome: "Jorge",
        email: "jorge_santin@gmail.com",
        password: '123456'
        })
        return res.json(novoUsers)
    } catch(e){
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

    //index
    async index(req,res){
      try{
        const users = await Users.findAll()
        return res.json(users)
      }catch(e){
        return res.json(null)
      }
    }
    //show
    async show(req,res){
      try{
        const id = req.params.id
        const user = await Users.findByPk(id)
        return res.json(user)
      }catch(e){
        return res.json(null)
      }
    }
    //update
    async update(req,res){
      try{
        if(!req.params.id){
          return res.status(400).json({
            errors: ['Id não enviado.']
          })
        }

        const user = await Users.findByPk(id)
        if(!user){
          return res.status(400).json({
            errors: ['Usuario não existe']
          })
        }

        const novosDados = user.update(req.body)

        return res.json(novosDados)
      }catch(e){
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        })
      }
    }
    //delete
    async delete(req,res){
      try{
        if(!req.params.id){
          return res.status(400).json({
            errors: ['Id não enviado.']
          })
        }

        const user = await Users.findByPk(id)
        if(!user){
          return res.status(400).json({
            errors: ['Usuario não existe']
          })
        }

        await user.destroy()

        return res.json(user)
      }catch(e){
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        })
      }
    }
}

export default new UserController()
