/**
 * @global
 * @type {any}
 * @name bord
 */
let bord;
/**
 * @global
 * @type {any}
 * @name musique
 */
let musique;
/**
 * @global
 * @type {any}
 * @name boing
 */
let boing;
/**
 * @global
 * @type {number}
 * @name Score
 */
var Score = 0;
/**
 * @global
 * @type {number}
 * @name multiplicateur
 */
var multiplicateur = 0;
/**
 * @global
 * @type {number}
 * @name nbBalleRestante
 */
var nbBalleRestante = 0;
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
 * @type {int}
 * @name health
 */
let health;
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
 * @name affichageScore
 */
let affichageScore;
/**
 * @global
 * @type {string}
 * @name affichageVie
 */
let affichageVie;
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
 * @type {string}
 * @name affichageCombo
 */
let affichageMultiplicateur;
/**
 * @global
 * @type {int}
 * @name longueur
 */
let longueur = 0;
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
 * @description Précharge les images et assets
 */
function preload() {
    bord = loadImage('assets/bord.png');
    fond = loadImage('assets/fond.jpg');
    fondScore = loadImage('assets/Fond_Score.png');
    fontImpact = loadFont('fonts/PartyConfetti.ttf');
    soundFormats('mp3', 'ogg');
    musique = loadSound('sound/music.mp3');
    boing = loadSound('sound/boing.mp3');
}

/**
 * @description Préparation du script
 */
function setup() {
    // Creation du canvas 
    createCanvas(window.innerWidth, window.innerHeight);
    //Couleur des contours
    stroke(100);
    // Images par seconde
    frameRate(60);
    //Parametre du texte
    textSize(window.innerWidth / 35);
    textFont(fontImpact);
    //Balle qu'on vas lancer
    balle_principale = new Ball(width / 70);
    //Un puit qui nous donne des balles en plus
    magic_pit = new Pit;
    //Definition des obstacles
    nbBallesligne = 22;
    nbBallesColonne = 6;
    maxScore = nbBallesColonne * nbBallesligne;
    obstacleRadius = width / 53;
    tableau();
    //Nombre d'essai
    nbBalleRestante = maxScore;
    health = 25;
    //Le score
    currentScore = new score(0);
    musique.play();
}