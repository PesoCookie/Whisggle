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
    }
}

function tableau() {
    X = new Array(nbBallesColonne)
    for (j = 0; j < nbBallesColonne; j++) {
        X[j] = new Array(nbBallesligne)
        for (i = 0; i < nbBallesligne; i++) {
            X[j][i] = new Obstacle(25, 255, width / 7 + (70 * i), height / 2 + j * 60)
        }
    }
}