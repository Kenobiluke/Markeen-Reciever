def on_received_number(receivedNumber):
    global Lighttrack
    if receivedNumber == 1:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, _200)
    elif receivedNumber == 2:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, _200)
    elif receivedNumber == 3:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, _200)
    elif receivedNumber == 4:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, _200)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    elif Radiochannel == 5:
        if Lighttrack == 0:
            Lighttrack = 1
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
        else:
            Lighttrack = 0
            maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
            maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global Radiochannel
    Radiochannel += 1
    if Radiochannel == 10:
        Radiochannel = 9
    basic.show_string("" + str(Radiochannel))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Radiochannel
    Radiochannel += -1
    if Radiochannel == 0:
        Radiochannel = 1
    basic.show_string("" + str(Radiochannel))
input.on_button_pressed(Button.B, on_button_pressed_b)

Radiochannel = 0
Lighttrack = 0
_200 = 0
_200 = 200
Lighttrack = 0

def on_forever():
    radio.set_group(Radiochannel)
basic.forever(on_forever)
