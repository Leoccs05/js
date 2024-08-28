exports.paginaInicial = (req, res)=>{
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome"></input>
            <button>Enviar Agora</button>
        </form>
    `);
}

exports.trataPost = (req, res) =>{
    res.send('Sou sua nova rota de Post.')
}
