const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientes-controller');

router.post('/', clientesController.createCliente);


router.get('/', clientesController.listaClientes);
router.get('/listaclientesPorNome', clientesController.listaClientesPorNome);
router.get('/listaclientesPorData', clientesController.listaclientesPorData);
router.get('/listaClientesPorValor', clientesController.listaClientesPorValor);


/////// url do teste será: http://localhost:3000/api/teste
router.get('/teste', clientesController.test);

router.get('/listanome', clientesController.pesquisaCliente);

module.exports = router;
