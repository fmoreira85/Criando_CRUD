const { futimes } = require("node:fs");

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

function atualizar(req,res) {

    const id = Number(req.params.id);

    const usuario = usuarios.find(function(u) {
        return u.id === id;
    });

    if (!usuario) {
        return res.send("Usuário não encontrado");
    }

    usuario.nome = req.body.nome;
    usuario.idade = req.body.idade;

    res.json(usuario);
    
}

function deletar(req,res) {


  const id = Number(req.params.id);

  const indice = usuarios.findIndex(function(u) {
    return u.id === id;
  });


  if (indice === -1){
    return res.send("Usuário não encontrado");
  }

  usuarios.splice(indice, 1)

  res.send("Usuário deletado");

}

module.exports = {
    listar,criar,atualizar,deletar
};