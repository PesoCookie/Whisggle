/**
 * @description Pit that give you moar balls
 * @property {Point2d} position Position de la balle dans un plan 2d
 * @property {Point2d} speed Vitesse de la balle à chaque mouvement, défini en interne avec launch()
 * @property {number} radius Rayon de la balle
 * @property {string} color Couleur de la balle
 */
class Pit {
    /**
     * @constructor
     * @descrition construit le trou
     */
    constructor() {
        this.size = new Point2d(width / 10, height / 50);
        this.position = new Point2d(random(0, width - this.size.x), height / 1.01);
        this.vitesse = new Point2d(width / 600, 0);
    }
    mouve() {
        this.position.add(this.vitesse);
        if (this.position.x >= width - this.size.x) {
            this.vitesse.x = -this.vitesse.x
        } else if (this.position.x <= 0) {
            this.vitesse.x = -this.vitesse.x
        };
    }
    show() {
        rect(this.position.x, this.position.y, this.size.x, this.size.y, 20, 20, 0, 0);
    }
}