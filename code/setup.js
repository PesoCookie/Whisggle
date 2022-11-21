/**
 * @global
 * @type {any}
 * @name bord
 */
let bord;
/**
 * @global
 * @type {any}
 * @name fond
 */
let fond;
/**
 * @global
 * @type {Ball}
 * @name balle_principale
 */
let balle_principale;
/**
 * @global
 * @type {boolean}
 * @name en_cours
 */
let en_cours = false;

/**
 * @description Précharge les images et assets
 */
function preload() {
    bord = loadImage('assets/bord.png');
    fond = loadImage('assets/fond.jpg');
}

/**
 * @description Préparation du script
 */
function setup() {
    // Creation du canvas 
    createCanvas(1270, 600);
    // Couleur de base
    fill(255);
    // Taille des contours
    stroke(100);
    // Images par seconde
    frameRate(60);

    balle_principale = new Ball();
}
