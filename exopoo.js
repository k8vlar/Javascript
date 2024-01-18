class etudiant {
    constructor(age,name, height){
        this.age=age,
        this.name=name,
        this.height=height
        alert("etudiant instancié")
    };
    getAge () {
        return this.age};
    getName (){
        return this.name};
    getHeight (){
        return this.height};
    }

const etudiant1 = new etudiant(`15`, `jean`,`188`);
const etudiant2 = new etudiant(`20`, `robert`, `150`);
alert (etudiant1.getName ()+" a "+etudiant1.getAge()+"ans et fait"+etudiant1.getHeight()+"cm")