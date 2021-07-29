const mongoose = require('mongoose');
const Clientes = mongoose.model('Clientes');


exports.createCliente = async data => {
  const cliente = new Clientes(data);
  await cliente.save();
};


exports.listaClientes = async data => {
  const res = await Clientes.find(data, 
      'nomeCliente valor data titulo _id'
  );
  return res;
};


exports.listaClientesPorNome = async data => {
  const res = await Clientes.find(data, 
    'nomeCliente valor data titulo _id'
).sort({nomeCliente:1});
return res;
};


exports.listaClientesPorValor = async data => {
  const res = await Clientes.find(data, 
      'nomeCliente valor data titulo _id'
  ).sort({valor:-1});
  return res;
};


exports.listaclientesPorData = async data => {
  const res = await Clientes.find(data, 
      'nomeCliente valor data titulo _id'
  ).sort({data:-1});
  return res;
};


exports.pesquisaCliente = async (data={}) => {
  const res = await Clientes.find(data, 
          'nomeCliente valor data titulo _id'
  );
  return res;
};

