const express = require('express');
const proveedorSchema = require('../models/proveedor');

//Constructor
const router = express.Router();

//Crear rol
router.post('/proveedor', (req, res) => {
    const proveedor = proveedorSchema(req.body);
    proveedor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener todos los roles
router.get('/proveedor', (req, res) => {
    proveedorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Obtener un rol
router.get('/proveedor/:id', (req, res) => {
    const { id } = req.params;
    proveedorSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Actualizar un rol
router.put('/proveedor/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, telefono, correo, direccion, categoria, descripcion } = req.body;
    proveedorSchema
        .updateOne({ _id: id }, { $set: {nombre, telefono, correo, direccion, categoria, descripcion} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

//Eliminar un rol
router.delete('/proveedor/:id', (req, res) => {
    const { id } = req.params;
    proveedorSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message : error }));
});

module.exports = router;
