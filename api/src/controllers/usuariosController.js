const usuarios = [];


function listar(req,res) {

    res.json(usuarios);
    
}

function criar(req,res) {

    const usuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        idade: req.body.idade
    };

    usuarios.push(usuario);

    res.json(usuario);
    
}