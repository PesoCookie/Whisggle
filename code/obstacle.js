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
}