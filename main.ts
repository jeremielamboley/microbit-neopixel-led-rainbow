input.onButtonPressed(Button.A, function () {
    LEDdirection = forward
})
input.onButtonPressed(Button.B, function () {
    LEDdirection = backward
})
let LEDdirection = 0
let backward = 0
let forward = 0
basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
forward = 1
backward = -1
LEDdirection = forward
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(LEDdirection)
    strip.show()
    basic.pause(200)
})
