const mongoose = require('mongoose');

const productosSchema = mongoose.Schema({
    id: {
        type : String,
        required:[true,'El campo id es obligatorio']

    },
    producto : {
        type: String,
        required:[true,'El campo Producto es obligatorio']
    },
    categoria : {
        type: String,
        required:[true,'El campo Categoria es obligatorio']
    },
    precio : {
        type: Number,
        required:[true,'El campo Precio es obligatorio']
    },
    cantidad : {
        type: Number,
        required:[true, 'El campo Cantidad es obligatorio']
    },
    descripcion : {
        type: String,
        required:[true, 'El campo Descripcion es obligatorio']
    }
});

module.exports = mongoose.model('productos', productosSchema);