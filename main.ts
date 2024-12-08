let strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J4, 24, PlanetX_Display.NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, Math.map(PlanetX_Basic.trimpot(PlanetX_Basic.AnalogRJPin.J2), 0, 1023, 0, 100))
})
