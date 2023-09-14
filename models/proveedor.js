const { Schema, model } = require('mongoose');

const ProveedorSchema = Schema({
   
    Nombreproveedor: {
        type: String,
        required: [true, 'el nombre del proveedor es obligatorio']
    },
    telefono: {
        type: Number,
        required: [true, 'La categoria  es obligatoria']
    },
    correo: {
        type:   String,
        required: [true, 'El correo es obligatorio']
    },
    direccion: {
        type: String,
        required: [true, 'la direccion es obligatoria']
    },
    tipodeproducto: {
        type: String,
        enum: ['Shampoos', 'Acondicionador','Gominas','Geles'],
        required: [true, 'El tipo de producto es obligatorio']
    },
    descripcionproveedor: {
        type: String,
        required: [true, 'la descripcion del proveedor es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
    }
});

module.exports = model('Proveedor', ProveedorSchema);
