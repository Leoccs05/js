const fs = require('fs').promises
//manda caminho e configuração de caracteres
module.exports = (caminho) => fs.readFile(caminho, 'utf8')
