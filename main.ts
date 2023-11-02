radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, _200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, _200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, _200)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # .
            . # . . #
            . . # . #
            `)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, _200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.showLeds(`
            . . # . .
            . . . # .
            . # # # #
            # . . # .
            # . # . .
            `)
    } else if (Radiochannel == 5) {
        if (Lighttrack == 0) {
            Lighttrack = 1
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                . # # # .
                # # # # #
                `)
        } else {
            Lighttrack = 0
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            basic.showLeds(`
                . . # . .
                . # . # .
                . # . # .
                . # . # .
                # # # # #
                `)
        }
    }
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.A, function () {
    Radiochannel += 1
    if (Radiochannel == 10) {
        Radiochannel = 9
    }
    basic.showString("" + Radiochannel)
})
input.onButtonPressed(Button.B, function () {
    Radiochannel += -1
    if (Radiochannel == 0) {
        Radiochannel = 1
    }
    basic.showString("" + Radiochannel)
})
let Radiochannel = 0
let Lighttrack = 0
let _200 = 0
_200 = 254
Lighttrack = 0
basic.forever(function () {
    radio.setGroup(Radiochannel)
})
