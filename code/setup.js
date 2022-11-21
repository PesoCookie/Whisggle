
let bord
let fond

var en_cour, main;
// en_cour vérifie si la balle en sur l'écran pour éviter de lancer plusieur balles
// true signifie que la balle n'est pas la, false si elle est là
// main correspond à la balle principale


function preload() {
    bord = loadImage('assets/bord.png');
    fond = loadImage('assets/fond.jpg');
  }
function setup() {
    // Creation du canvas 
    createCanvas(1270, 600);
    fill(255);
    stroke(100);
    frameRate(60);
    en_cour = true;
    test = false;
    main = new ball;
}