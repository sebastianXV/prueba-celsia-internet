const { Schema, model } = require('mongoose');

const ClienteSchema = new Schema({
    identificacion: {
        type: String,
        required: true
    },
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true,
        unique: true
    },
    tipoIdentificacion: {
        type: String,
        required: true,
    },
    fechaNacimiento: {
        type: Date,
        required: true,
        unique: true
    },
    numeroCelular: {
        type: String,
        required: true,
        unique: true
    },
    correoElectronico: {
        type: String,
        required: true,
        unique: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Cliente', ClienteSchema);
