const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Inadimplentes API',
    version: '1.0.0',
    Autor: 'Jose Izaias Alcantara Lima',
  });
});

module.exports = router;
