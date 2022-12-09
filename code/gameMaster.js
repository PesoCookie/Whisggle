// Controle des points et de toute regles du jeu
class score {

    /**
     * @description Construction du score
     * @param {number} score Score initial
     */
    constructor(score) {
        this.score = score;
    }

    /**
     * @description Ajoute au score le nombre d'obstacle cassé multiplié par un facteur
     * @param {number} addition Le nombre d'obstacle cassé
     * @param {number} multiplicator Le facteur de multiplication
     */

    add(addition, multiplicator) {
        this.score += round(addition * multiplicator); // Ajoute au score avec multiplicateur possible
    }
}

/**
 * @description vérifie la vie du joueur et si besoin affiche le message de mort
 */
function healthCheck() {
    if (health <= 0) {
        affichageVie = ` TA PERDU GROS NUL avec un score de : ${currentScore.score} `
        textSize(window.innerWidth / 20);
        textAlign(CENTER,CENTER);
        fill('red');
        text(affichageVie, width / 2, height / 3)
        noLoop()
    }
    if(nbBalleRestante <= 0){
        affichageVie = ` BIEN JOUE , tu a gagné avec un score de : ${currentScore.score} `
        textSize(window.innerWidth / 20);
        textAlign(CENTER,CENTER);
        fill('red');
        text(affichageVie, width / 2, height / 3)
        noLoop()
    }
}