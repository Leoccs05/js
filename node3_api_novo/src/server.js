import app from './app'

//importando a conexão com o banco de dados
const conn = require("./config/database");

const port = 3003

//rodando o servidor
conn.sync()
    .then(() => {
      app.listen(port, () =>{
        console.log()
        console.log(`Escutando na porta ${port}`)
        console.log(`CTRL + clique em http://localhost:${port}`)
      })
    })
    .catch((err) => {
        console.log("Erro ao conectar");
    });
