# bme280-microbit
---
This extension supports BME280 Digital Temperature, Pressure and Humidity Sensor in MakeCode

* I2C address 0x76

## Method
---
* Initialize

Always run at the beginning
```
BME280.init()
```
* Get Temperature
```
BME280.getTemperature()
```

* Get Pressure
```
BME280.getPressure()
```

* Get Humidity
```
BME280.getHumidity()
```

* Get Temperature to string
```
BME280.stringTemperature()
```

* Get Pressure to string
```
BME280.stringPressure()
```

* Get Humidity to string
```
BME280.stringHumidity()
```

## Example
---
```
BME280.init()
basic.forever(function () {
    basic.showString(BME280.stringTemperature())
    basic.showString(BME280.stringPressure())
    basic.pause(1000)
})
```

## License
MIT

## Supported targets

* for PXT/microbit

