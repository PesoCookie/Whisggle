var pos = {
    x: 100,
    y: 160,
    s: 50,
    s2: 50
}

var v = 3


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    ellipse(pos.x, pos.y, pos.s, pos.s2)
    pos.y += v
    if (pos.y >= height - pos.s / 2) {

        pos.s2 -= 1
        v = v - 0.4

    } else if (pos.y <= 0 + pos.s / 2) {
        pos.s2 -= 1
        v = v + 0.4
    } else if (pos.y <= height + pos.s / 2 || pos.y >= 0 - pos.s / 2) {
        if (pos.s2 <= 50) {
            pos.s2 += 1;
        }
    }

}