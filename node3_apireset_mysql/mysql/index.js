const express = require('express')
const mysql = require('mysql2')
const port = 3000;
const app = express()

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'curso_node',
  password: '',
});

// chamando a função que conecta com o banco de dados
conn.connect((error) => {
  if (error) {
    console.log('Erro ao tentar se conectar com o banco de dados');
  }

  console.log('Conectado com o banco de dados');

  // rodando a aplicação somente quando conseguir se conectar com o banco de dados
  app.listen(port, () => {
    console.log('Servidor rodando corretamente');
  });
});

