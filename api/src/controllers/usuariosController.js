const usuarios = [];

function nomeEhValido(nome) {
    return typeof nome === "string" && nome.trim() !== "";
}

function buscarUsuarioPorId(id) {
    return usuarios.find(function(usuario) {
        return usuario.id === id;
    });
}

function listar(req, res) {
    res.json(usuarios);
}

function buscarPorId(req, res) {
    const id = Number(req.params.id);
    const usuario = buscarUsuarioPorId(id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuario nao encontrado" });
    }

    res.json(usuario);
}

function criar(req, res) {
    if (!nomeEhValido(req.body.nome)) {
        return res.status(400).json({ mensagem: "Nome e obrigatorio" });
    }

    const usuario = {
        id: usuarios.length + 1,
        nome: req.body.nome.trim(),
        idade: req.body.idade
    };

    usuarios.push(usuario);

    res.status(201).json(usuario);
}

function atualizar(req, res) {
    const id = Number(req.params.id);
    const usuario = buscarUsuarioPorId(id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuario nao encontrado" });
    }

    if (!nomeEhValido(req.body.nome)) {
        return res.status(400).json({ mensagem: "Nome e obrigatorio" });
    }

    usuario.nome = req.body.nome.trim();
    usuario.idade = req.body.idade;

    res.json(usuario);
}

function deletar(req, res) {
    const id = Number(req.params.id);
    const indice = usuarios.findIndex(function(usuario) {
        return usuario.id === id;
    });

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Usuario nao encontrado" });
    }

    usuarios.splice(indice, 1);

    res.json({ mensagem: "Usuario deletado" });
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};
