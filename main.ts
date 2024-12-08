input.onButtonPressed(Button.A, function () {
    TPBot.stopCar()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 16; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, Math.map(PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J1), 0, 1023, 0, 100))
})
input.onSound(DetectedSound.Loud, function () {
    TPBot.headlightColor(0x000000)
    basic.clearScreen()
    basic.showIcon(IconNames.Duck)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Indigo))
    TPBot.setTravelTime(TPBot.DriveDirection.Forward, 100, 2)
    TPBot.setTravelTime(TPBot.DriveDirection.Left, 100, 0.3)
    TPBot.setTravelTime(TPBot.DriveDirection.Forward, 100, 1)
    TPBot.setTravelTime(TPBot.DriveDirection.Left, 100, 0.3)
    TPBot.stopCar()
    basic.pause(3000)
    basic.showIcon(IconNames.Heart)
    strip.showRainbow(1, 360)
    TPBot.headlightRGB(randint(0, 255), randint(0, 255), randint(0, 255))
    strip.rotate(1)
    strip.show()
})
let afstand = 0
let strip: PlanetX_Display.Strip = null
input.setSoundThreshold(SoundThreshold.Loud, 222)
strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J2, 8, PlanetX_Display.NeoPixelMode.RGB)
strip.setBrightness(4)
strip.showRainbow(1, 360)
for (let index = 0; index < 16; index++) {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
}
basic.forever(function () {
    afstand = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
    if (afstand < 20 && afstand != 0) {
        TPBot.stopCar()
        TPBot.headlightColor(0xff0000)
        strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Red))
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 30, 1)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 30, 0.5)
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, 30, 1.5)
        TPBot.setTravelTime(TPBot.DriveDirection.Right, 30, 0.5)
        TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 100)
        TPBot.headlightColor(0x00ff00)
        strip.showRainbow(1, 360)
        for (let index = 0; index < 16; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(100)
        }
    }
})
