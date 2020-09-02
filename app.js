const lugar = require('axios');
const clima = require('./clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        // demand: true
    }
}).argv;

clima.getClima(12.60971, -7.997576).then(console.log).catch(console.log);