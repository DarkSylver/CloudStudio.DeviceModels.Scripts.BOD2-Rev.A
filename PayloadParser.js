function parseUplink(device, payload) 
{ 
  var parsed = payload.asJsonObject();
  env.log(parsed); // Para debug

  var sensorCode = parsed.sensor;
  var value = parseInt(parsed.value); // Asegura que el valor sea numérico

  if (device.endpoints.byAddress(sensorCode) != null) {
    device.endpoints.byAddress(sensorCode).updateGenericSensorStatus(value);
  } else {
    env.log("Unknown sensor code: " + sensorCode);
  }
}