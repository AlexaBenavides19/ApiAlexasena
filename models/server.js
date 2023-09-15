const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8087;
        this.productoPath = '/api/producto';
        this.facturaPath = '/api/factura';
        this.proveedorPath = '/api/proveedor'
        this.middlewares();
        this.routes();
        this.dbConectar();
    }

    middlewares() {
        this.app.use(bodyParser.json());

        // Configuración de CORS
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Reemplaza con tu dominio local
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });

        this.app.use(express.static(__dirname + '/public'));
    }

    routes() {
        this.app.use(this.productoPath, require('../routes/producto'));
        this.app.use(this.facturaPath, require('../routes/factura'));
        this.app.use(this.proveedorPath, require('../routes/proveedor'))
    }

    async dbConectar() {
        await dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando los puerto ${this.port}`);
        });
    }
}

module.exports = Server;
