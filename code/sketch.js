/**
 * @description Dessine une frame
 */
function draw() {
    background(2, 247, 137);
    if (Playing == true) {
        // Dessine le background et les bords
        image(fond, 0, 0, width, height, 0, 0, fond.width, fond.height);
        image(bord, 0, 0, width, height, 0, 0, bord.width, bord.height, LEFT);
        fill(255)
        circle(width / 2, 0, width / 7); // Il y a des chances que cette ligne soit inutile dans le future

        // Déplace la balle qu'on utilise pour détruire les obstacles
        balle_principale.mouve();

        // Déplace le puit magique en bas de l'écran
        magic_pit.mouve();

        // Vérifie les colisions entre les obstacles et la balle
        for (i = 0; i < nbBallesligne; i++) {
            for (j = 0; j < nbBallesColonne; j++) {
                balle_principale.collision(i, j);
            }
        }

        // Dessine les obstacles, la balle et le puits magique
        for (i = 0; i < nbBallesligne; i++) {
            for (j = 0; j < nbBallesColonne; j++) {
                X[i][j].draw();
            }
        }
        magic_pit.show();

        // Affiche la trajectoire d'aide à la visée et la balle
        if (en_cours != true) {
            fantom.number = round(dist(balle_principale.position.x, balle_principale.position.y, mouseX, mouseY) / (balle_principale.radius * 2) / 2);
            for (i = 1; i < fantom.number + 1; i++) {
                fantom.x = balle_principale.position.x + balle_principale.speed.x * i * 2;
                fantom.y = balle_principale.position.y + balle_principale.speed.y * i * 2 + balle_principale.gravity * (i ** 2) * 2;
                fantom.radius = balle_principale.radius / i;
                noStroke();
                fill(255);
                circle(fantom.x, fantom.y, fantom.radius);
                stroke(100);
            }
        }
        balle_principale.draw();

        //Dessine le fond des scores
        image(fondScore, 0, 0, width / 4, height / 1.2, 0, 0, fondScore.width, fondScore.height)

        // Vérifie si le joueur n'as plus de vie et message de mort
        healthCheck();

        //enlève le slider
    } else {
        // Affiche un gros bouton play pour lancer le jeu
        textAlign(CENTER, CENTER);
        fill(255);
        textSize((height + width) / 10);
        text('Play', width / 2, height / 2);

        //affiche le slider de difficulté
        slider_health.position(width / 70, height / 7);
        health = slider_health.value();
    }
    // Appelle de l'affichage
    affichage();
}

/**
 * @description Exécuté à chaque clic
 */
function mousePressed() {
    if (Playing == true) {
        if (en_cours != true) {
            balle_principale.launch();
        }
    } else {
        if (mouseX < width / 2 + (height + width) / 10 & mouseX > width / 2 - (height + width) / 10 & mouseY < height / 2 + height / 10 & mouseY > height / 2 - height / 10) {
            Playing = true;
            slider_health.position(width, height);
            health = slider_health.value();
            setup();
        }
    }
    if (health == 0 || nbBalleRestante == 0) {
        Playing = false;
    }


}
//Fonction d'affichage
function affichage() {
    affichageScore = `Score : ${currentScore.score}`;
    affichageVie = `Vie : ${health}`;
    affichageMultiplicateur = `Multiplicateur : ${multiplicateur}`;
    affichageHighScore = `Meilleur Score : ${highScore}`;
    textSize(window.innerWidth / 35);
    textAlign(LEFT, BOTTOM);
    fill('#EE8D11');
    text(affichageScore, width / 70, height / 12);
    fill('red');
    text(affichageVie, width / 70, height / 7);
    fill('#08C6F9');
    text(affichageMultiplicateur, width / 70, height / 5);
    textAlign(RIGHT, BOTTOM);
    fill('#EE8D11');
    text(affichageHighScore, width * 0.99, height / 12);
}