const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    id: {
        type : String,
        required:[true,'El campo id es obligatorio']

    },
    nombre : {
        type: String,
        required:[true,'El campo Nombre es obligatorio']
    },
    telefono : {
        type: Number,
        required:[true,'El campo telefono es obligatorio']
    },
    correo : {
        type: String,
        required:[true,'El campo Correo es obligatorio']
    },
    direccion : {
        type: String,
        required:[true, 'El campo Direccion es obligatorio']
    },
    categoria : {
        type: String,
        required:[true, 'El campo categoria  es obligatorio']
    }, 
    descripcion : {
        type: String,
        require:[true, 'el campo descripcion es obligatorio']
    }
});

module.exports = mongoose.model('proveedor', proveedorSchema);