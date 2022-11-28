/**
 * @description Dessine une frame
 */
function draw() {
    background(100);
    // Dessine le background
    image(fond, 0, 0, width, height, 0, 0, fond.width, fond.height)
        //Dessine les bords
    image(bord, 0, 0, width, height, 0, 0, bord.width, bord.height, LEFT);
    //Dessine le fond des scores
    image(fondScore, 0, 0, width / 5, height / 6)

    circle(width / 2, 0, width / 7); // Il y a des chances que cette ligne soit inutile dans le future

    // Affiche le score
    affichageString = ` Score : ${currentScore.score} / ${maxScore} `
    text(affichageString, width / 70, height / 10)

    balle_principale.draw();
    balle_principale.mouve();
    Position_mouse.x = mouseX
    Position_mouse.y = mouseY
    if (en_cours != true) {
        trajectoire(dist(balle_principale.position.x, balle_principale.position.y, Position_mouse.x, Position_mouse.y))
    }
}

/**
 * @description Exécuté à chaque clic
 */
function mousePressed() {
    if (en_cours != true) {
        balle_principale.launch();
    }
}

/**
 * @description Prédit la trajectoire de la boule
 */
function trajectoire(distance) {
    var nombre_de_balle;
    nombre_de_balle = round(distance / (balle_principale.radius * 2));
    var tableau_de_balle = Array(nombre_de_balle)
        /**for (i = 1; i => nombre_de_balle; i++) {
            tableau_de_balle[i] = Position_mouse
        }*/
}