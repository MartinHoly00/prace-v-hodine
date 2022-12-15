let stranakostky = 0
let hodit = false
let tip = 1
basic.showNumber(tip)
input.onButtonPressed(Button.A, function () {
    tip -= 1
    if (tip == 0) {
        tip = 1
        basic.showNumber(tip)
    } else
        basic.showNumber(tip)
})

input.onButtonPressed(Button.B, function () {
    tip += 1
    if (tip == 7) {
        tip = 6
        basic.showNumber(tip)
    } else
        basic.showNumber(tip)
})

input.onGesture(Gesture.Shake, function () {
    stranakostky = randint(1, 6)
    hodit = true
    if (stranakostky == 1) {
        basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `
        )
    } else if (stranakostky == 2) {
        basic.showLeds(`
    . . . . .
    . . . # .
    . . . . .
    . # . . .
    . . . . .
    `
        )
    } else if (stranakostky == 3) {
        basic.showLeds(`
    . . . . .
    . . . # .
    . . # . .
    . # . . .
    . . . . .
    `
        )
    } else if (stranakostky == 4) {
        basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `
        )
    } else if (stranakostky == 5) {
        basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `
        )
    } else if (stranakostky == 6) {
        basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    . # . # .
    . . . . .
    `
        )
    }

    if (stranakostky == tip && hodit) {
        music.playTone(800, music.beat(BeatFraction.Half))
    } else {
        music.playTone(131, music.beat(BeatFraction.Half))
    }
})

