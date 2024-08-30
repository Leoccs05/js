const mongoose = require('mongoose')
//trata os dados para o mongoDB por isso usa o mongoose
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema);

class Home{

}

module.exports = Home;