const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=32f843d833c38373032f825c4a92418a&units=metric`)
    return console.log(`La temperatura en ${resp.data.name.[0]} es de: ${resp.data.main.temp}`)
}

module.exports = {
    getClima
}