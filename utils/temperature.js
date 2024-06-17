const UNITS = {
  celcius: "°C",
  fahrenheit: "°F",
};

function convertTemperatureTo(temperature, unit) {
  if (unit === UNITS.celcius) {
    return (temperature - 32) * (5 / 9);
  }
  return temperature * (9 / 5) + 32;
}

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

function isIceTemperature(temperature, unit) {
  return unit === UNITS.celcius ? temperature <= 0 : temperature <= 32;
}

export { UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature };
