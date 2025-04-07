/******************************EXO 4 *****************CLASSE somme***********/
class somme{
    constructor(nom,age){
        this.nom= nom;
        this.age= age;
    }
    describe(){
        return `Je m'appelle ${this.nom}, j'ai ${this.age} ans.`;
    }
}
/*let somme=[0,10,20,50,80]
let tableSomme= somme.reduce((accumulator,currentValue)=> accumulator + currentValue,0);
console.log(tableSomme);
*/
const perso1= new somme("Durand",35) ;
const perso2= new somme ("Lucas",27) ;
const perso3= new somme ("Anaïs",29) ;
const perso4= new somme ("Jules",6) ;
const perso5= new somme ("Pierre",80) ;

const personAge = [perso1, perso2, perso3, perso4, perso5];

const totalAge = personAge.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
}, 0);

console.log(totalAge); 
console.log(describe(somme))

/*let tableSomme= somme.reduce((accumulator, age) =>accumulator + age,0);console.log(somme);
console.log(tableSomme);*/


