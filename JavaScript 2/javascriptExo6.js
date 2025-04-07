
/******************************EXO 5 *****************CLASSE arme***********/

class Perso{
    constructor(nom,sante,force,defense){
        this.nom= nom;
        this.sante= sante;
        this.force= force;
        this.defense= defense;
    }
    describe(){
        return `Je m'appelle ${this.nom}, j'ai ${this.sante} points de santé, ${this.force} points de force,et ${this.defense} points de defense`;
    }
}
/*
let perso1= new  Perso("Jon",100,50,60) ; console.log(perso1.describe());
let perso2= new  Perso("Jones",100,70,40) ;
let perso3= new Perso("Bones",250,40,70) ;
let perso4= new  Perso("Francis",45,25,100) ;
let perso5= new  Perso("Ngannou",5,35,85) ;
*/
/*
console.log(tablePerso[0].describe()) ; //appel de la methode describe() pour le premier objet de la tablePerso Persofunction chercher_par_nom(tableau , nom ) {
   for (let i = 0; i < tableau.length; i++) {
      if (tableau[i].nom == nom) return i;
   }
   return -1;*/

class Aventurier extends Perso{
    constructor (nom,sante,force,defense,xp,){
        super(nom,sante,force,defense);
        this.xp = xp;
        this.titre= this.constructor.name; /*autre methode pour appeler le nom de la classe*/
    }
    describe(){
        return `${super.describe()} je suis un ${this.titre} avec ${this.xp} de points d'experience`;
    }
}

class Guerrier extends Perso{
    constructor (nom,sante,force,defense,xp,rage,titre="Guerrier"){
        super(nom,sante,force,defense);
        this.xp = xp;
        this.rage = rage; 
        this.titre= titre;
    }
    describe(){
        return `${super.describe()}, je suis un ${this.titre} avec ${this.xp} de points d'experience et un bonus spécial de ${this.rage} temporaire`;
    }
}

class Mage extends Perso{
    constructor (nom,sante,force,defense,xp,dureesort,typesort,titre="Mage"){
        super(nom,sante,force,defense);
        this.xp = xp;
        this.dureesort = dureesort; 
        this.typesort = typesort; 
        this.titre= titre;
    }
    describe(){
        return `${super.describe()}, je suis un ${this.titre} avec ${this.xp} de points d'experience et le sortilège ${this.typesort}, ayant une duree de vie de ${this.dureesort} secondes `;
    }
}

const perso1= new Aventurier("Jon",100,50,60,30,"Aventurier") ; console.log(perso1.describe());
const perso2= new  Guerrier("Jones",100,70,40,10,40,"Guerrier") ; console.log(perso2.describe());
const perso3= new Mage("Bones",250,40,70,25,90,"concatenation","Mage") ; console.log(perso3.describe());
const perso4= new  Mage("Francis",150,45,25,0,160,"doubleConcatenation","Mage") ; console.log(perso4.describe());
const perso5= new  Mage("Ngannou",50,5,35,85,250,"tripleConcatenation","Mage") ; console.log(perso5.describe());

let tablePerso= [perso1,perso2,perso3,perso4,perso5] ;
console.log(tablePerso);
/*
const arme1= new Arme("Epee",15,30) ;
const arme2= new Arme("marteau",10,20) ;
const arme3= new Arme("cuillere",25,35) ;
const arme4= new Arme("Armouille",45,60) ;
const arme5= new Arme("trompette",5,10) ;

let tableArme=[arme1,arme2,arme3,arme4,arme5];
console.log(tableArme);*/
/*console.log(describe.Armearme*/
/*class Sort extends Perso{
    constructor(nom,sante,force,defense,nomArme,degatMin,degatMax,nom,dureeEffet,typeEffet){
        super(nom,sante,force,defense,nomArme,degatMin,degatMax);
        this.dureeEffet= dureeEffet;
        this.typeEffet= typeEffet;
    }
    describe(){
        return `${super.describe()} et et il m'a été conféré un sort de type ${this.typeEffet} ayant une durée de ${this.dureeEffet}`;
    }
}*/
/*const Arme = new Arme(('Hammer','Sword','Bow'),console.log(this));

const Sort = new Sort(console.log({$this
}))
Arme.describe()
*/
