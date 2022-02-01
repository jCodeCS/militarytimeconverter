let milTime = game.askForNumber("Enter hours in military time", 2)
let standardTime = milTime % 12
if (milTime > 12) {
    game.splash("" + standardTime + "pm")
} else if (milTime < 12) {
    game.splash("" + standardTime + "am")
} else {
    game.splash("12pm")
}
