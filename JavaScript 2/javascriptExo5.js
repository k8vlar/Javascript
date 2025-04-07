
/******************************EXO 5 *****************CLASSE arme***********/

class Sort {
    constructor(dureeEffet,typeEffet){
        this.dureeEffet= dureeEffet;
        this.typeEffet= typeEffet;
    }
    describe(){
        return `il m'a été conféré un sort de type ${this.typeEffet} ayant une durée de ${this.dureeEffet} secondes`;
    }
}
class Arme extends Sort{
    constructor (dureeEffet,typeEffet,nomArme,degatMin,degatMax){
        super(dureeEffet,typeEffet);
        this.nomArme = nomArme;
        this.degatsMin= degatMin;
        this.degatsMax= degatMax;
    }
    describe(){
        return `${super.describe()} et j'ai une arme ${this.nomArme} permettant de faire un minimum et un maximum de ${this.degatsMin} et ${this.degatsMax} points de dégats`;
    }
}
const attaque1= new  Arme(50,"concatenation","Epee",15,30) ; console.log(attaque1.describe());
const attaque2= new  Arme(70,"abrracadabra","marteau",10,20) ;console.log(attaque2.describe());
const attaque3= new Arme(40,"Tilège","cuillere",25,35) ;console.log(attaque3.describe());
const attaque4= new  Arme(25,"dici","Armouille",45,60) ;console.log(attaque4.describe());
const attaque5= new  Arme(35,"concatenation","trompette",5,10) ;console.log(attaque5.describe());

let tableAttaque= [attaque1,attaque2,attaque3,attaque4,attaque5] ;
console.log(tableAttaque);