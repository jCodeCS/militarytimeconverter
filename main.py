milTime = game.ask_for_number("Enter hours in military time", 2)
standardTime = milTime % 12
if milTime > 12:
    game.splash("" + str(standardTime) + "pm")
elif milTime < 12:
    game.splash("" + str(standardTime) + "am")
else:
    game.splash("12pm")