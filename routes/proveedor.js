const { Router } = require('express');

const route = Router();

const { getProveedor, postProveedor, putProveedor, deleteProveedor } = require('../controllers/proveedor');

route.put('/', putProveedor);
route.delete('/', deleteProveedor);

route.get('/', getProveedor);

route.post('/', postProveedor);

module.exports = route;
