// Anzeige und RGB
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 4; index++) {
        A_anzeige()
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function A_anzeige () {
    basic.showIcon(IconNames.Heart, 300)
    basic.showIcon(IconNames.SmallHeart, 300)
}
// Pieps
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let index = 0; index < 4; index++) {
        A_RGB()
    }
    basic.setLedColor(0x000000)
})
function A_RGB () {
    basic.setLedColor(0x007fff)
    basic.pause(300)
    basic.setLedColor(0xffff00)
    basic.pause(300)
    basic.setLedColor(basic.rgb(0, 255, 0))
    basic.pause(300)
}
let Winkel = 0
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4digit.set(7)
// Roter Knopf P0 Ventilator P1
// links auf Brett
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
// Rotationssensor P2
// Servo P3
// rechts auf Brett
basic.forever(function () {
    Winkel = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 179)
    _4digit.show(Winkel)
    pins.servoWritePin(AnalogPin.P3, Winkel)
})
