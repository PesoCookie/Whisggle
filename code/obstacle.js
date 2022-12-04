/**
 * @description Balle
 * @property {Point2d} position Position de la balle dans un plan 2d
 * @property {number} radius Rayon de la balle
 * @property {string} color Couleur de la balle
 */
class Obstacle {
    /**
     * @constructor
     * @description Crée une nouvelle instance d'une balle
     */
    constructor(radius, color, positionx, positiony) {
        this.position = new Point2d(positionx, positiony);
        this.color = color
        this.radius = radius
    }
    draw() {
        fill(this.color);
        circle(this.position.x, this.position.y, this.radius);
        if(en_cours!=true) {
            if(this.color==100){
                this.radius = 0
                this.position.x = width*2
            }
        }
    }
}

function tableau() {
    X = new Array(nbBallesColonne)
    for (j = 0; j < nbBallesColonne; j++) {
        X[j] = new Array(nbBallesligne)
        for (i = 0; i < nbBallesligne; i++) {
            X[j][i] = new Obstacle(obstacleRadius, 255, offsetBall + (70 * i), height / 2 + j * 60)
        }
    }
}

function offset() {
    offsetBall = (width - (70) * (nbBallesligne)) / 2 + obstacleRadius
}