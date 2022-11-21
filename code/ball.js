/**
 * @description Balle
 * @property {Point2d} position Position de la balle dans un plan 2d
 * @property {Point2d} speed Vitesse de la balle à chaque mouvement, défini en interne avec launch()
 * @property {number} radius Rayon de la balle
 * @property {string} color Couleur de la balle
 */
class Ball {
    /**
     * @constructor
     * @description Crée une nouvelle instance d'une balle
     */
    constructor() {
        this.position = new Point2d(width / 2, 20);
        this.speed = new Point2d(0, 0);
        this.radius = 20;
        this.color = 'rgb(170,169,173)';
    }
    /**
     * @description Desinne la balle
     */
    draw() {
        fill(this.color);
        circle(this.position.x, this.position.y, this.radius);
        fill('white');
        // Dessine un petit cercle qi représente la réflextion de la lumière.
        circle(this.position.x - this.radius / 5, this.position.y - this.radius / 5, this.radius / 3);
    }
    /**
     * @description Initialise le mouvement de la balle selon la position du point donné (généralement position du curseur)
     * @param {Point2d} point Position du point
     */
    launch(point) {
        this.speed.x = (point.x - this.position.x) / 30
        this.speed.y = (point.y - this.position.y) / 30
        en_cours = true
    }
    /**
     * @description Mouvement de la balle
     */
    move() {
        this.position.add(this.speed);
        this.rebond();
    }
    rebond() { }
}