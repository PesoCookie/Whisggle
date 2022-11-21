function draw() {
    background(100);
    image(fond, 0 ,0 , width, height, 0, 0, fond.width, fond.height)
    image(bord, 0, 0, width, height, 0, 0, bord.width, bord.height, CONTAIN, LEFT);
    circle( width / 2 , 0 , width / 7);
}   