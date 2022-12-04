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
    affichageScore = `Score : ${currentScore.score}`
    affichageVie = `Vie : ${health}`
    text(affichageScore, width / 70, height / 12)
    text(affichageVie, width / 70, height / 7)


    for (i = 0; i < nbBallesligne; i++) {
        for (j = 0; j < nbBallesColonne; j++) {
            X[i][j].draw();
        }
    }
    for (i = 0; i < nbBallesligne; i++) {
        for (j = 0; j < nbBallesColonne; j++) {
            balle_principale.collision(i, j);
        }
    }
    balle_principale.draw();
    balle_principale.mouve();
    if (en_cours != true) {
        trajectoire(dist(balle_principale.position.x, balle_principale.position.y, mouseX, mouseY))
        for (i = 1; i < fantom.number + 1; i++) {
            fantom.x = balle_principale.position.x + balle_principale.speed.x * i * 2
            fantom.y = balle_principale.position.y + balle_principale.speed.y * i * 2 + balle_principale.gravity * (i ** 2) * 2
            fantom.radius = balle_principale.radius / i
            circle(fantom.x, fantom.y, fantom.radius)
        }
    }
    magic_pit.show();
    magic_pit.mouve();
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
    fantom.distance = distance / (balle_principale.radius * 2)
    fantom.number = round(distance / (balle_principale.radius * 2) / 2);
}