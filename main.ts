// When true. If button A is pressed and you will get "You Win" 3 times. If button b is pressed you will see and X, "you lost",X once. When false the circle icon will appear. 
while (true) {
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 3; index++) {
            basic.showString("You Win")
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.No)
        basic.showString("You Lost")
        basic.showIcon(IconNames.No)
    }
}
