input.onButtonPressed(Button.A, function () {
    strip.showColor(LedColors._pickRandom())
})
input.onButtonPressed(Button.AB, function () {
    strip.showRainbow(1, 360)
    if (LEDdirection == forward) {
        LEDdirection = still
    } else {
        LEDdirection = forward
    }
})
input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 360)
    LEDdirection = forward
})
let LEDdirection = 0
let still = 0
let forward = 0
let strip: neopixel.Strip = null
let LedColors: number[] = []
basic.showIcon(IconNames.Heart)
LedColors = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White)
]
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
forward = 1
let backward = -1
still = 0
LEDdirection = forward
strip.setBrightness(40)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(LEDdirection)
    strip.show()
    basic.pause(200)
    if (input.runningTime() > 600000) {
        strip.clear()
    }
})
