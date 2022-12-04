// Controle des points et de toute regles du jeu



class score {

    /**
     * @description Construction du score
     * @param {number} score Score initial
     */
    constructor(score){
        this.score = score;
    }

    /**
     * @description Aditionne le x et y des deux points en modifiant l'instance courante
     * @param {number} addition Le score à ajouter
     * @param {number} multiplicator Le facteur de multiplication
     */

    add(addition , multiplicator) {

        this.score += round(addition * multiplicator); // Ajoute au score avec multiplicateur possible
        
        
    }


}