/**
 * @description Point en deux dimensions
 * @property {number} x Position sur l'axe x
 * @property {number} y Position sur l'axe y
 */
class Point2d {
    /**
     * @description Construit un nouveau point
     * @param {number} x Position sur l'axe x
     * @param {number} y Position sur l'axe y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
    /**
     * @description Aditionne le x et y des deux points en modifiant l'instance courante
     * @param {Point2d} point Le point à ajouter
     */
    add(point) {
            this.x += point.x;
            this.y += point.y;
        }
        /**
         * @description Définie le x et y du points avec ceux d'un autre points
         * @param {Point2d} point Le point à ajouter
         */
    set(point) {
        this.x = point.x;
        this.y = point.y;
    }
}