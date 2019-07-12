var express = require('express');
var router = express.Router();
const controllers=require('../controllers/listado');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/listado', controllers.listado) 
router.get('/buscar/:busqueda', controllers.buscar)


module.exports = router;
