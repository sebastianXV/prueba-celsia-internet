const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({
    identificacion: {
        type: String,
        required: true
    },
    servicio:{
        type: String,
        required: true,
        enum: ['Internet 200 MB', 'Internet 400 MB', 'Internet 600 MB', 'Directv Go', 'Paramount+',
            'Win+']
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
