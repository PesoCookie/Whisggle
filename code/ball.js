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
        this.reset = new Point2d;
        this.speed = new Point2d(0, 0);
        this.gravity = height / 1000
        this.radius = radius;
        this.color = 'rgb(170,169,173)';

        this.reset.set(this.position);
    };
    /**
     * @description Desinne la balle
     */
    draw() {
        fill(this.color);
        circle(this.position.x, this.position.y, this.radius);
        fill('white');
        // Dessine un petit cercle qi représente la réflextion de la lumière.
        circle(this.position.x - this.radius / 5, this.position.y - this.radius / 5, this.radius / 3);
    };
    /**
     * @description Initialise le mouvement de la balle selon la position du point donné (généralement position du curseur)
     */
    launch() {
        en_cours = true
    };
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
            this.speed.x = (mouseX - this.position.x)
            this.speed.y = (mouseY - this.position.y)
            this.speed.x = map(this.speed.x, 0, width, 0, width / 30);
            this.speed.y = map(this.speed.y, 0, height, 0, height / 30);
        }
    };
    initialisation() {
        currentScore.add(Score, multiplicateur)
        Score = 0
        multiplicateur = 0
        health -= 1
        this.collision2()
        this.position.set(this.reset)
        this.speed.set(new Point2d(0, 0))

    }
    rebond() {
        if (this.position.x > width - this.radius) {
            this.speed.x = -this.speed.x / 1.1
            this.position.x = width - this.radius
        }
        if (this.position.x < this.radius) {
            this.speed.x = -this.speed.x / 1.1
            this.position.x = this.radius
        }
        if (this.position.y < this.radius) {
            this.speed.y = -this.speed.y / 1.1
            this.position.y = this.radius
        }
    }
    collision(i, j) {
        if (dist(this.position.x, this.position.y, X[i][j].position.x, X[i][j].position.y) <= ((this.radius + X[i][j].radius) / 2)) {
            if (this.position.y >= X[i][j].position.y) {
                if (this.speed.y < 0) {
                    this.speed.y = -this.speed.y / 1.1
                } else {
                    this.speed.y = +this.speed.y
                }
            } else {
                if (this.speed.y > 0) {
                    this.speed.y = -this.speed.y / 1.1
                } else {
                    this.speed.y = +this.speed.y
                }
            }
            if (this.position.x >= X[i][j].position.x) {
                if (this.speed.x < 0) {
                    this.speed.x = -this.speed.x / 1.1
                } else {
                    this.speed.x = +this.speed.x
                }
            } else {
                if (this.speed.x > 0) {
                    this.speed.x = -this.speed.x / 1.1
                } else {
                    this.speed.x = +this.speed.x
                }
            }
            if (X[i][j].color == 255) {
                Score = Score + 1
                multiplicateur = multiplicateur + 0.5
            }
            X[i][j].color = 100
        }
    }
    collision2() {
        if (dist(this.position.x, this.position.y, magic_pit.position.x, magic_pit.position.y) < this.radius + 100) {
            health += 1
        }
    }
}