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
        if (en_cours != true) {
            if (this.color == 100) {
                this.radius = 0
                this.position.x = width * 2
            }
        }
    }
}

function tableau() {
    X = new Array(nbBallesligne)
    for (i = 0; i < nbBallesligne; i++) {
        X[i] = new Array(nbBallesColonne)
        for (j = 0; j < nbBallesColonne; j++) {
            X[i][j] = new Obstacle(obstacleRadius, 255, map(i, 0, nbBallesligne, 0 + obstacleRadius * 3, width - obstacleRadius * 2), map(j, 0, nbBallesColonne, height / 2, height - obstacleRadius * 2))
        }
    }
}

function offset() {
    offsetBall = (width - (70) * (nbBallesligne)) / 2 + obstacleRadius
}