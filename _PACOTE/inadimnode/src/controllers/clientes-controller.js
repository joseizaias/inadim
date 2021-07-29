const repository = require('../repositories/clientes-repository');


// lista sem ordenacao
exports.listaClientes = async (req, res) => {
  try {
    const data = await repository.listaClientes();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os Clientes...'});
  }
};


// lista COM ordenacao
exports.listaClientesPorNome = async (req, res) => {
  try {
    const data = await repository.listaClientesPorNome();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os Clientes ordenados por Nome...'});
  }
};


// lista COM ordenacao de valor total por valor
exports.listaClientesPorValor = async (req, res) => {
  try {
    const data = await repository.listaClientesPorValor();
    
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os Clientes ordenados por Valor...'});
  }
};


// lista ordenacao de data
exports.listaclientesPorData = async (req, res) => {
  try {
    const data = await repository.listaclientesPorData();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os Clientes ordenados por Data...'});
  }
};


///// lista um user   
exports.pesquisaCliente = async (req, res) => {
  try {
    let nomeCliente = req.query.nomeCliente

    const data = await repository.pesquisaCliente({ nomeCliente: nomeCliente, });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha na Pesquisa dos dados de um Cliente...'});
  }
};


////// fazer testes
exports.test = function  (req, res) {
  res.send('Hello! Teste Controller');
};


// create
exports.createCliente = async (req, res) => {
  try {
    await repository.createCliente({
        nomeCliente: req.body.nomeCliente,
        valor: req.body.valor,
        data: req.body.data,
        titulo: req.body.titulo,
    });
    res.status(201).send({message: 'Cliente cadastrado com sucesso!!!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar Cliente.'});
  }
};
