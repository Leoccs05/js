const fs = require('fs').promises
module.exports = (caminhos, dados) => {
    //cria um arquivo( caminho do arquivos, dados que queremos escrever, configuração)
    fs.writeFile(caminhos, dados, { flag: 'w', encoding: 'utf8'})
}
