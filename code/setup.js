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
 * @type {int}
 * @name fantom_number
 */
var fantom = {
    x: 0,
    y: 0,
    radius: 0,
    number: 0,
    distance: 0
};
/**
 * @global
 * @type {int}
 * @name longueur
 */
let longueur = 0;
/**
 * @global
 * @type {int}
 * @name offsetBall
 */
var offsetBall;
/**
 * @global
 * @type {int}
 * @name obstacleRadius
 */
var obstacleRadius;
/**
 * @global
 * @type {pit}
 * @name magic_pit
 */
var magic_pit;
/**
 * @global
 * @type {int}
 * @name nbr_essay
 */
var nbr_essay;
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
    // balle qu'on vas lancer
    balle_principale = new Ball(width / 70);
    // nbr de balle qu'on peut lancer
    nbr_essay = 10;
    // un rectangle qui nous donne des balles en plus
    magic_pit = new Pit;
    //Definition des obstacles
    nbBallesligne = 22;
    nbBallesColonne = 6;
    maxScore = nbBallesColonne * nbBallesligne;
    obstacleRadius = width / 53;
    offset();
    tableau();
    //Le score
    currentScore = new score(0);
}