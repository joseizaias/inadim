const express = require('express');
const cors = require("cors");

const mongoose = require('mongoose');
require('dotenv').config();


// App
const app = express();

app.use(cors());

app.use(express.urlencoded({extended: true}));

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true,
 });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load models
const Clientes = require('./models/clientes');

/// popular a base de testes <<<
const fs = require('fs')
const path = './banco.nao.esta.criado.txt'

try {
  if (fs.existsSync(path)) {
    //file exists
    fs.unlinkSync(path)
    // Popula a ''testclientes'' caso ela esteja vazia <<< soh para testes >>>
    // Base para popular database se estiver vazio. <<< Soh para testes >>>
    const dadosArray = [
      {"nomeCliente":"Ana","valor":1720,"data":"2020-10-10T03:00:00.000Z","titulo":"titulo sobre blablabla..."},
      {"nomeCliente":"Paula","valor":2220,"data":"2020-10-11T03:00:00.000Z","titulo":"titulo ao portador..."},
      {"nomeCliente":"ALuizio","valor":2455,"data":"2020-07-11T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"Luiso","valor":2455,"data":"2020-07-12T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"Paula Freitas","valor":2220,"data":"2020-10-11T03:00:00.000Z","titulo":"titulo ao portador..."},
      {"nomeCliente":"ALuizio Goncalves","valor":2455,"data":"2020-07-11T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"Luiso Sousa","valor":2455,"data":"2020-07-12T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"Altair","valor":1245,"data":"2021-07-12T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"Altaires Venancio","valor":2453,"data":"2021-09-12T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"Altaires Cardoso","valor":2153,"data":"2020-12-12T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"Altaires Pelos","valor":1125,"data":"2019-12-12T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"Altaires Minus","valor":3125,"data":"2020-01-01T03:00:00.000Z","titulo":"titulos diversos.."}, 
      {"nomeCliente":"JJJames","valor":1325,"data":"2020-02-02T03:00:00.000Z","titulo":"titulos do Aranha I.."}, 
      {"nomeCliente":"JJ James","valor":1325,"data":"2020-02-02T03:00:00.000Z","titulo":"titulos do Aranha I.."}, 
      {"nomeCliente":"Venon I","valor":13588,"data":"2020-03-03T03:00:00.000Z","titulo":"titulos Evenon 2.."},
      {"nomeCliente":"Venon II","valor":11838,"data":"2020-04-04T03:00:00.000Z","titulo":"titulos Evenonss 33.."}, 
      {"nomeCliente":"Venon IV","valor":2188,"data":"2020-04-04T03:00:00.000Z","titulo":"titulos Evenonss 33.."}, 
      {"nomeCliente":"Venon V","valor":2188,"data":"2020-04-04T03:00:00.000Z","titulo":"titulos Evenonss 33.."}, 
      {"nomeCliente":"Venon VII","valor":2188,"data":"2020-04-04T03:00:00.000Z","titulo":"titulos Evenonss 33.."}, 
    ]

    db.collection('clientes').insertMany(dadosArray, function(err, res) {
          if (err) throw err
          console.log('Numero inseridos para realizacao dos testes: ' + res.insertedCount)
        }
    )    

  }
} catch(err) {
  console.error(err)
}

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const clientesRoutes = require('./routes/clientes-routes');
const { collection } = require('./models/clientes');
app.use('/clientes', clientesRoutes);
app.use('/api', clientesRoutes);

module.exports = app;
