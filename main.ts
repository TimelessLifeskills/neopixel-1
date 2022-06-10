let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 11; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 11; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index <= 11; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(100)
    }
})
