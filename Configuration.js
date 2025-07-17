function getConfiguration(config)
{
  config.addressLabel = {
    en: "Device ID",
    es: "ID del dispositivo"
  };
}

function getEndpoints(deviceAddress, endpoints)
{
  var e = endpoints.addEndpoint("1", "1 - Human presence", endpointType.genericSensor);
  e.variableTypeId = 1445; //  Sensor Code = 1  - Human presence (0=not present, 1=present)

  var e = endpoints.addEndpoint("2", "2 - Human Motion", endpointType.genericSensor);
  e.variableTypeId = 1358; //  Sensor Code = 2  - Human motion state (0=not present, 1=still, 2=active)

  var e = endpoints.addEndpoint("3", "3 - Heart Rate", endpointType.genericSensor);
  e.variableTypeId = 1446; //  Sensor Code = 3  - Heart Rate (0-150)

  var e = endpoints.addEndpoint("4", "4 - Human motion rate", endpointType.genericSensor);
  e.variableTypeId = 1447; //  Sensor Code = 4  - Human motion rate (0-100)

  var e = endpoints.addEndpoint("5", "5 - Bed Presence", endpointType.genericSensor);
  e.variableTypeId = 1448; //  Sensor Code = 5  - Getting in or out of bed (0=Not lying in bed, 1=In bed, 2=None)

  var e = endpoints.addEndpoint("6", "6 - Sleep State", endpointType.genericSensor);
  e.variableTypeId = 1449; //  Sensor Code = 6  - Sleep state (0=awake, 1=light sleep, 2=deep sleep, 3=not in bed)

  var e = endpoints.addEndpoint("7", "7 - Sleep Score", endpointType.genericSensor);
  e.variableTypeId = 1450; //  Sensor Code = 7  - Sleep quality score (0-100)

  var e = endpoints.addEndpoint("8", "8 - Breathing Rate", endpointType.genericSensor);
  e.variableTypeId = 1451; //  Sensor Code = 8  - Breathing Rate (pul/min)

  var e = endpoints.addEndpoint("9", "9 - Distance to Object", endpointType.genericSensor);
  e.variableTypeId = 1452; //  Sensor Code = 9  - Distance to Object (cm)

  var e = endpoints.addEndpoint("10", "10 - Awake Time", endpointType.genericSensor);
  e.variableTypeId = 1453; //  Sensor Code = 10 - Sleep time awake (min)

  var e = endpoints.addEndpoint("11", "11 - Light Sleep Time", endpointType.genericSensor);
  e.variableTypeId = 1454; //  Sensor Code = 11 - Sleep time light sleep (min)

  var e = endpoints.addEndpoint("12", "12 - Deep Sleep Time", endpointType.genericSensor);
  e.variableTypeId = 1455; //  Sensor Code = 12 - Sleep time deep sleep (min)

  var e = endpoints.addEndpoint("13", "13 - Sleep Rating", endpointType.genericSensor);
  e.variableTypeId = 1456; //  Sensor Code = 13 - Sleep quality rating (0=None, 1=High, 2=Medium, 3=Poor)
 
  var e = endpoints.addEndpoint("14", "14 - Breathing state", endpointType.genericSensor);
  e.variableTypeId = 1457; //  Sensor Code = 14 - Breathing state (0=Normal, 1=High, 2=Low, 3=None)
}

function validateDeviceAddress(address, result)
{
  // Opcional: agregar validación si el formato del ID del dispositivo lo requiere
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubType = false;
}
