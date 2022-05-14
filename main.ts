let poti = 0
let winkel = 0
let gesetzterWinkel = 0
basic.forever(function () {
    poti = pins.analogReadPin(AnalogPin.P1)
    winkel = poti * (180 / 1023)
    basic.showNumber(winkel)
    if (gesetzterWinkel != winkel) {
        pins.servoWritePin(AnalogPin.P2, winkel)
        gesetzterWinkel = winkel
    }
})
