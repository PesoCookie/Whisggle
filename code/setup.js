
let bord
let fond

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