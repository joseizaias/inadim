const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  nomeCliente: String,
  valor: Number,
  data: Date,
  titulo: String,
});

clienteSchema.index({nomeCliente : 1});
clienteSchema.index({data : 1});
clienteSchema.index({valor : 1});

clienteSchema.index( { name: "text", description: "text" } )

module.exports = mongoose.model('Clientes', clienteSchema);
