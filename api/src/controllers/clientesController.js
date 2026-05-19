const clientes = [];

function nomeEhValido(nome) {
    return typeof nome === "string" && nome.trim() !== "";
}

function buscarClientePorId(id) {
    return clientes.find(function(cliente) {
        return cliente.id === id;
    });
}

function listar(req, res) {
    res.json(clientes);
}

function buscarPorId(req, res) {
    const id = Number(req.params.id);
    const cliente = buscarClientePorId(id);

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente nao encontrado" });
    }

    res.json(cliente);
}

function criar(req, res) {
    if (!nomeEhValido(req.body.nome)) {
        return res.status(400).json({ mensagem: "Nome e obrigatorio" });
    }

    const cliente = {
        id: clientes.length + 1,
        nome: req.body.nome.trim(),
        email: req.body.email
    };

    clientes.push(cliente);

    res.status(201).json(cliente);
}

function atualizar(req, res) {
    const id = Number(req.params.id);
    const cliente = buscarClientePorId(id);

    if (!cliente) {
        return res.status(404).json({ mensagem: "Cliente nao encontrado" });
    }

    if (!nomeEhValido(req.body.nome)) {
        return res.status(400).json({ mensagem: "Nome e obrigatorio" });
    }

    cliente.nome = req.body.nome.trim();
    cliente.email = req.body.email;

    res.json(cliente);
}

function deletar(req, res) {
    const id = Number(req.params.id);
    const indice = clientes.findIndex(function(cliente) {
        return cliente.id === id;
    });

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Cliente nao encontrado" });
    }

    clientes.splice(indice, 1);

    res.json({ mensagem: "Cliente deletado" });
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};
