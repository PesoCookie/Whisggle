/**
 * @description Pit that give you moar balls
 * @property {Point2d} position Position de la balle dans un plan 2d
 * @property {Point2d} speed Vitesse de la balle à chaque mouvement, défini en interne avec launch()
 * @property {number} size taille
 * @property {string} color Couleur de la balle
 */
class Pit {
    /**
     * @constructor
     * @descrition construit le trou
     */
    constructor() {
            this.size = new Point2d(width / 10, height / 20);
            this.position = new Point2d(random(0, width - this.size.x), height / 1.05);
            this.vitesse = new Point2d(width / 600, 0);
        }
        /**
         * @desciption Déplace le puit de gauche à droite en le faisant rebondir sur les côté
         */
    mouve() {
        this.position.add(this.vitesse);
        if (this.position.x >= width - this.size.x) {
            this.vitesse.x = -this.vitesse.x
        } else if (this.position.x <= 0) {
            this.vitesse.x = -this.vitesse.x
        };
    };
    /**
     * @description Dessine le puit
     */
    show() {
        rect(this.position.x, this.position.y, this.size.x, this.size.y, 20, 20, 0, 0);
        fill(20);
        ellipse(this.position.x + this.size.x / 2, this.position.y + this.size.y / 3, this.size.x / 1.1, this.size.y / 2);
        fill(255);
    }

}