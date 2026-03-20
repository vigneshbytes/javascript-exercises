const convertToCelsius = function() {
  let celcius = ((arguments[0]-32) * 5/9);
  return Number((celcius*10%10 == 0)? celcius:celcius.toFixed(1));

};

const convertToFahrenheit = function() {
  let farenheit = ((arguments[0] * 9/5)+32);
  return Number((farenheit*10%10 == 0)? farenheit:farenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
