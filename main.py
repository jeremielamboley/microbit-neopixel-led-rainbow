def on_button_pressed_a():
    global LEDdirection, LedColorIndex
    LEDdirection = still
    strip.show_color(LedColors[LedColorIndex])
    if LedColorIndex == 8:
        LedColorIndex = 0
    else:
        LedColorIndex = LedColorIndex + 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global LEDdirection
    LEDdirection = still
    strip.show_rainbow(1, 360)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global LEDdirection
    strip.show_rainbow(1, 360)
    LEDdirection = forward
input.on_button_pressed(Button.B, on_button_pressed_b)

strip: neopixel.Strip = None
LedColorIndex = 0
LEDdirection = 0
still = 0
forward = 0
LedColors: List[number] = []
basic.show_icon(IconNames.HEART)
LedColors = [neopixel.colors(NeoPixelColors.RED),
    neopixel.colors(NeoPixelColors.ORANGE),
    neopixel.colors(NeoPixelColors.YELLOW),
    neopixel.colors(NeoPixelColors.GREEN),
    neopixel.colors(NeoPixelColors.BLUE),
    neopixel.colors(NeoPixelColors.INDIGO),
    neopixel.colors(NeoPixelColors.VIOLET),
    neopixel.colors(NeoPixelColors.PURPLE),
    neopixel.colors(NeoPixelColors.WHITE)]
forward = 1
backward = -1
still = 0
LEDdirection = forward
LedColorIndex = 0
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.set_brightness(40)
strip.show_rainbow(1, 360)

def on_forever():
    strip.rotate(LEDdirection)
    strip.show()
    basic.pause(200)
    if input.running_time() > 600000:
        strip.clear()
basic.forever(on_forever)
