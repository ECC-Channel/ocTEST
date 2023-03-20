function A () {
    if (input.lightLevel() >= 128) {
        robotbit.GeekServo2KG(robotbit.Servos.S1, 90)
        SugarBox.servo2kg(SugarBox.SPort.S1, 90)
        basic.showIcon(IconNames.Yes)
    } else if (input.lightLevel() <= 128) {
        robotbit.GeekServo2KG(robotbit.Servos.S1, 360)
        SugarBox.servo2kg(SugarBox.SPort.S1, 360)
        basic.showIcon(IconNames.No)
    } else {
        SugarBox.motorStopAll()
    }
}
input.onButtonPressed(Button.A, function () {
    A()
})
function B () {
    S1 = Sugar.Light(AnalogPin.P0)
    if (Math.ceil(S1) >= 128) {
        robotbit.GeekServo2KG(robotbit.Servos.S1, 90)
        SugarBox.servo2kg(SugarBox.SPort.S1, 90)
        basic.showIcon(IconNames.Yes)
    } else if (Math.ceil(S1) <= 128) {
        robotbit.GeekServo2KG(robotbit.Servos.S1, 360)
        SugarBox.servo2kg(SugarBox.SPort.S1, 360)
        basic.showIcon(IconNames.No)
    } else {
        SugarBox.motorStopAll()
    }
}
input.onButtonPressed(Button.B, function () {
    B()
})
let S1 = 0
S1 = 0
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    Sugar.ledOnoff(DigitalPin.P2, Sugar.LEDSta.On)
    basic.pause(500)
    Sugar.ledOnoff(DigitalPin.P2, Sugar.LEDSta.Off)
})
