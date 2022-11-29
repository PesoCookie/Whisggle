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
    constructor(radius) {
            this.position = new Point2d(width / 2, height / 20);
            this.reset;
            this.speed = new Point2d(0, 0);
            this.gravity = height / 1000
            this.radius = radius;
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
         */
    launch() {
            en_cours = true
        }
        /**
         * @description Mouvement de la balle
         */
    mouve() {
        if (en_cours) {
            this.speed.y += this.gravity;
            if (this.position.y >= height) {
                en_cours = false;
                this.initialisation();
            }
            this.position.add(this.speed);
            this.rebond();
        } else {
            this.speed.x = (mouseX - this.position.x) / (width / 100);
            this.speed.y = (mouseY - this.position.y) / (width / 100);
        }
    }
    initialisation() {
        this.reset = new Point2d(width / 2, height / 20);
        this.position = this.reset
        this.speed.x = 0
        this.speed.y = 0
    }
    rebond() {
        if (this.position.x >= width || this.position.x <= 0) {
            this.speed.x = -this.speed.x
        }
    }
    collision(x,y,r){
        if (dist(this.position.x,this.position.y,x,y)<=((this.radius+r)/1.8)){
            this.speed.y = (-(this.speed.y))/1.5
            this.speed.x = (-(this.speed.x))/1.5
        }
    }
}