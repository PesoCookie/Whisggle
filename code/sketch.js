/**
 * @description Dessine une frame
 */
function draw() {
    background(100);
    // Dessine le background
    image(fond, 0, 0, width, height, 0, 0, fond.width, fond.height)
    //Dessine les bords
    image(bord, 0, 0, width, height, 0, 0, bord.width, bord.height,LEFT);
    //Dessine le fond des scores
    image(fondScore ,0,0,width / 5, height / 6  )

    circle(width / 2, 0, width / 7); // Il y a des chances que cette ligne soit inutile dans le future

    // Affiche le score
    affichageString =  ` Score : ${currentScore.score} / ${maxScore} `
    text(affichageString , width  / 70 , height / 10 )

    balle_principale.draw();
    balle_principale.mouve();
}

/**
 * @description Exécuté à chaque clic
 */
function mousePressed() {
    if (en_cours != true) {
        balle_principale.launch(mouseX, mouseY);
    }
}