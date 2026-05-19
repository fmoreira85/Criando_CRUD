const produtos = [];

function nomeEhValido(nome) {
    return typeof nome === "string" && nome.trim() !== "";
}

function buscarProdutoPorId(id) {
    return produtos.find(function(produto) {
        return produto.id === id;
    });
}

function listar(req, res) {
    res.json(produtos);
}

function buscarPorId(req, res) {
    const id = Number(req.params.id);
    const produto = buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto nao encontrado" });
    }

    res.json(produto);
}

function criar(req, res) {
    if (!nomeEhValido(req.body.nome)) {
        return res.status(400).json({ mensagem: "Nome e obrigatorio" });
    }

    const produto = {
        id: produtos.length + 1,
        nome: req.body.nome.trim(),
        preco: req.body.preco
    };

    produtos.push(produto);

    res.status(201).json(produto);
}

function atualizar(req, res) {
    const id = Number(req.params.id);
    const produto = buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto nao encontrado" });
    }

    if (!nomeEhValido(req.body.nome)) {
        return res.status(400).json({ mensagem: "Nome e obrigatorio" });
    }

    produto.nome = req.body.nome.trim();
    produto.preco = req.body.preco;

    res.json(produto);
}

function deletar(req, res) {
    const id = Number(req.params.id);
    const indice = produtos.findIndex(function(produto) {
        return produto.id === id;
    });

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Produto nao encontrado" });
    }

    produtos.splice(indice, 1);

    res.json({ mensagem: "Produto deletado" });
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};
