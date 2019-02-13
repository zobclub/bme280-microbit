// tests go here; this will not be compiled when this package is used as a library
BME280.init()
basic.forever(function () {
    basic.showString(BME280.stringTemperature())
    basic.showString(BME280.stringPressure())
    basic.pause(1000)
})
