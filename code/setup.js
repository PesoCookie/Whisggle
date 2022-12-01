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
 * @global
 * @type {score}
 * @name currentScore
 */
 let obstacleRadius = 25;
 /**
  * @global
  * @type {integer}
  * @name obstacleRadius
  */
 let currentScore;
/**
 * @description Précharge les images et assets
 */
function preload() {
    bord = loadImage('assets/bord.png');
    fond = loadImage('assets/fond.jpg');
    fontImpact = loadFont('fonts/PartyConfetti.ttf')
}

/**
 * @description Préparation du script
 */
function setup() {
    // Creation du canvas 
    createCanvas( window.innerWidth, window.innerHeight);
    // Couleur de base
    fill(255);
    // Taille des contours
    stroke(100);
    // Images par seconde
    frameRate(60);
    //Parametre du texte
    textSize(65);
    textFont(fontImpact);

    balle_principale = new Ball();
    currentScore = new score(0);
    
}
