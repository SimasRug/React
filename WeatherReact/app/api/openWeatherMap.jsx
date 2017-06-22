var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=342f888a6ea404f39c6ab0a446b3f63a&units=metric';
//342f888a6ea404f39c6ab0a446b3f63a


module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                // console.log(res.data);
                 return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}