//importando a tabela
import Users from "../models/Users"

class UserController{
  async store(req, res){
    try{
      const novoUsers = await Users.create({
        nome: "MJ",
        email: "jorge_marcio@gmail.com",
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
        const users = await Users.findAll({ attributes: ['id', 'nome', 'email']})
        console.log('User ID', req.userId);
        console.log('User EMAIL', req.userEmail)
        return res.json(users)
      }catch(e){
        return res.json(null)
      }
    }

    //show
    async show(req,res){
      try{
        const user = await Users.findByPk(req.userid)
        const {id, nome, email} = user
        return res.json({id, nome, email})
      }catch(e){
        return res.json(null)
      }
    }

    //update
    async update(req,res){
      try{
        const user = await Users.findByPk(req.userid)

        if(!user){
          return res.status(400).json({
            errors: ['Usuario não existe']
          })
        }

        const novosDados = user.update(req.body)
        const {id, nome, email} = novosDados
        return res.json({id, nome, email})
      }catch(e){
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        })
      }
    }

    //delete
    async delete(req,res){
      try{


        const user = await Users.findByPk(id)
        if(!user){
          return res.status(400).json({
            errors: ['Usuario não existe']
          })
        }

        await user.destroy()

        return res.json(null)
      }catch(e){
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        })
      }
    }
}

export default new UserController()
