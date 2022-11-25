/**
 * @description Dessine une frame
 */
function draw() {
    background(100);
    // Dessine le background
    image(fond, 0, 0, width, height, 0, 0, fond.width, fond.height)
    image(bord, 0, 0, width, height, 0, 0, bord.width, bord.height,LEFT);
    circle(width / 2, 0, width / 7);

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