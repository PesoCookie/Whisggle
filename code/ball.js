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
            this.position = new Point2d(width / 2, height / 20);
            this.speed = new Point2d(0, 0);
            this.gravity = height / 1000
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
    launch(mouseX, mouseY) {
            this.speed.x = (mouseX - this.position.x) / (width / 50)
            this.speed.y = (mouseY - this.position.y) / (width / 50)
            en_cours = true
        }
        /**
         * @description Mouvement de la balle
         */
    mouve() {
        if (en_cours) {
            this.speed.y += this.gravity
        }
        this.position.add(this.speed);
        this.rebond();
    }
    rebond() {}
}