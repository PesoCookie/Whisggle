class ball {
    constructor() {
        this.x = width / 2;
        this.y = 20;
        this.vx = 0;
        this.vy = 0;
        this.r = 20;
        this.color = 'rgb(170,169,173)'
    }
    draw() {
        fill(this.color)
        circle(this.x, this.y, this.r)
        fill('white')
        circle(this.x - this.r / 5, this.y - this.r / 5, this.r / 3)
    }
    launch() {

    }
    mouve() {

    }
    rebond() {

    }
}