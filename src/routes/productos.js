const express = require('express');
const productosSchema = require('../models/productos');

//Constructor
const router = express.Router();

//Crear usuario
router.post('/productos', (req, res) => {
    const productos = productosSchema(req.body);
    productos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener todos los usuarios
router.get('/productos', (req, res) => {
    productosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener un usuario
router.get('/productos/:id', (req, res) => {
    const { id } = req.params;
    productosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Actualizar un usuario
router.put('/prductos/:id', (req, res) => {
    const { id } = req.params;
    const { producto, categoria, precio, cantidad, descripcion } = req.body;
    productosSchema
        .updateOne({ _id: id }, { $set: {producto, categoria, precio, cantidad, descripcion} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Eliminar un usuario
router.delete('/productos/:id', (req, res) => {
    const { id } = req.params;
    productosSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

module.exports = router;
