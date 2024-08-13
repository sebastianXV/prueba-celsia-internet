const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({
    identificacion: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    ultimaFacturacion: {
        type: Date,
        default: Date.now()
    },
    ultimoPago: {
        type: Date,
        default: Date.now()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
});

module.exports = model('Servicio', ServicioSchema);
