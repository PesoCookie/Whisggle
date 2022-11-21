function draw() {
    background(100);
    circle(width / 2, 0, width / 7);
    main.draw();
    main.mouve();
}

function mousePressed() {
    if (en_cour == true) {
        main.launch();
    }

}