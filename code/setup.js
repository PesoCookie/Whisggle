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
 * @type {any}
 * @name fondScore
 */
let fondScore;
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
let currentScore;
/**
 * @global
 * @type {nbBallesligne}
 * @name nbBallesligne
 */
  let nbBallesligne;
/**
 * @global
 * @type {nbBallesColonne}
 * @name nbBallesColonne
 */
let nbBallesColonne;
 /**
 * @global
 * @type {int}
 * @name maxScore
 */
let maxScore;
/**
 * @global
 * @type {string}
 * @name affichageString
 */
let affichageString;
/**
 * @global
 * @type {Point2d}
 * @name Position_mouse
 */
let Position_mouse;
/**
 * @description Précharge les images et assets
 */
function preload() {
    bord = loadImage('assets/bord.png');
    fond = loadImage('assets/fond.jpg');
    fondScore = loadImage('assets/Fond_Score.png')
    fontImpact = loadFont('fonts/PartyConfetti.ttf')
}

/**
 * @description Préparation du script
 */
function setup() {
    // Creation du canvas 
    createCanvas(window.innerWidth, window.innerHeight);
    // Couleur de base
    fill(255);
    // Taille des contours
    stroke(100);
    // Images par seconde
    frameRate(60);
    //Parametre du texte
    textSize(window.innerWidth / 35);
    textFont(fontImpact);
    // position de la souris
    Position_mouse = new Point2d(mouseX, mouseY)

    maxScore = 10 // Valeur temporaire, a faire selon le nombre d'obstacle max  

    balle_principale = new Ball(20);
    currentScore = new score(0);
    nbBallesligne = 30
    nbBallesColonne = 5
    maxScore = nbBallesColonne*nbBallesligne // Valeur temporaire, a faire selon le nombre d'obstacle max  
    balle_principale = new Ball();
    currentScore = new score(0);
    tableau();
    
}

