const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=cf6c9267d18a4a082f63778ada6fba72&query=' +
    latitude +
    ',' +
    longitude +
    '&units=m';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          '. It is currently ' +
          response.body.current.temperature +
          ' degress out, and the wind speed is ' +
          response.body.current.wind_speed +
          ' km/h'
      );
    }
  });
};

module.exports = forecast;
