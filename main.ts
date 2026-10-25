input.onButtonPressed(Button.A, function () {
    alarmTriggered = 0
})
let alarmTriggered = 0
alarmTriggered = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.lightLevel() > 50) {
        alarmTriggered = 1
    }
    basic.showIcon(IconNames.Yes)
})
