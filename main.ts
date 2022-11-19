input.onPinReleased(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # # #
        . . # . .
        . # . # .
        `)
    basic.showString("Stop")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . # . # .
        `)
    basic.showString("Go")
})
