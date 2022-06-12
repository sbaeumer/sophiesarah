input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0x00ff00)
})
let winkel = 0
let feuchtigkeit = 0
pins.analogWritePin(AnalogPin.P2, 0)
pins.servoWritePin(AnalogPin.C17, 90)
basic.setLedColor(0x00ff00)
basic.pause(10000)
basic.setLedColor(0xff0000)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    feuchtigkeit = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P2, feuchtigkeit)
    winkel = pins.map(
    pins.analogReadPin(AnalogPin.C16),
    0,
    1023,
    10,
    170
    )
    pins.servoWritePin(AnalogPin.C17, winkel)
})
