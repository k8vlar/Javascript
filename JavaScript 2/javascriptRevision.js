
/* EXO 1*/

/**/
function paire(){
    let nombre= document.getElementById('nombre');
        if (nombre % 2 == 0){
            alert("nombre paire");
        } else {
            alert("nombre impaire");
        }
}
paire(2)


/******************************EXO 2 *****************/

function palindrome(str){
    /*strMin= str.toLowerCase(); Pour eviter le pblm de non palindrome avec majuscule*/
if (str.split('').reverse().join('')== str){
console.log("c'est un palindrome");
}
else console.log ("ce n'est pas un palindrome");
}

palindrome("kayak");

palindrome("kayaK");


/******************************EXO II *****************/

/*function changeLight(){
    const redLight = document.getElementById("red");
    const orangeLight = document.getElementById("orange");
    const greenLight = document.getElementById("green");
    let lights=[0,2];
      for (let i=0;i<lights.length;i++){  
        let lights= new lights[i]+1;
        if (lights> 2){lights=0;
        }
            if (lights[i]===0){
                redLight.style.backgroundColor="red";
                orangeLight.style.backgroundColor="";
                greenLight.style.backgroundColor="";
            }
            else if (lights[i] ===1){
                orangeLight.style.backgroundColor="orange";
                redLight.style.backgroundColor="";
                greenLight.style.backgroundColor="";
            }
            else if(lights[i]===2){
                greenLight.style.backgroundColor="green";
                redLight.style.backgroundColor="";
                orangeLight.style.backgroundColor="";
            }
            lights[i]=lights;
       };
       
};
changeLight();      
setInterval(changeLight,2000);*/
/*    switch(lights){
            case 0:
                redLight.style.display="red";
                orangeLight.style.backgroundColor="none";
                greenLight.style.backgroundColor="none";
                break;
            case 1:
                
                redLight.style.display="none";
                orangeLight.style.backgroundColor="orange";
                greenLight.style.display="none";
                break;
            case 2:
                redLight.style.backgroundColor="none";
                orangeLight.style.display="none" ;
                greenLight.style.display="green";
                break;
        }
        lights= (lights + 1)%3; //on récupère le modulo de la somme des cases et de 3 pour que les boucles se terminent correctement
    }

changeLight();
setInterval(changeLight,2000);*/
/* if (lightPosition==0){
     redLight.style.backgroundColor="red";
     orangeLight.style.backgroundColor="dark";
     greenLight.style.backgroundColor="dark";
 }
 else if (lightPosition==1){
     redLight.style.backgroundColor="dark";
     orangeLight.style.backgroundColor="orange";
     greenLight.style.backgroundColor="dark";
    
 }
 else{
    redLight.style.backgroundColor="dark";
    orangeLight.style.backgroundColor="dark";
    greenLight.style.backgroundColor="green";
 }
 lightPosition= (lightPosition+1)%3;//pour que la position ne dépassez pas les bornes [0,1 ou 2]
}
changeLight();
setInterval(changeLight,1000)//appelle la fonction toutes les  1 seconde*/


let redLight = document.getElementById("red");
let orangeLight = document.getElementById("orange");
let greenLight = document.getElementById("green");



function feuTricolore() {
    
setTimeout(()=>{
        orangeLight.style.backgroundColor="white"; 
        redLight.style.backgroundColor="white";
        greenLight.style.backgroundColor="green";}
         ,500);

    setTimeout(()=>{
        orangeLight.style.backgroundColor="orange"; 
        redLight.style.backgroundColor="white";
        greenLight.style.backgroundColor="white";}
         ,3000);
     
        setTimeout(()=>{
            orangeLight.style.backgroundColor="white"; 
            redLight.style.backgroundColor="red";
            greenLight.style.backgroundColor="white";}
             ,4000);
            

            setTimeout(()=>{
                orangeLight.style.backgroundColor="white"; 
                redLight.style.backgroundColor="white";
                greenLight.style.backgroundColor="green";}
                 ,6000);
                
                 setTimeout(()=>{
                    orangeLight.style.backgroundColor="orange"; 
                    redLight.style.backgroundColor="white";
                    greenLight.style.backgroundColor="white";}
                     ,9000);
                     
                     setTimeout(()=>{
                        orangeLight.style.backgroundColor="white"; 
                        redLight.style.backgroundColor="red";
                        greenLight.style.backgroundColor="white";}
                         ,10000);

                         setTimeout(()=>{
                            orangeLight.style.backgroundColor="white"; 
                            redLight.style.backgroundColor="white";
                            greenLight.style.backgroundColor="green";}
                             ,12000);
                            
                             setTimeout(()=>{
                                orangeLight.style.backgroundColor="orange"; 
                                redLight.style.backgroundColor="white";
                                greenLight.style.backgroundColor="white";}
                                 ,14000);
                                 
                                 setTimeout(()=>{
                                    orangeLight.style.backgroundColor="white"; 
                                    redLight.style.backgroundColor="red";
                                    greenLight.style.backgroundColor="white";}
                                     ,15000);
                        
            };
feuTricolore()
setInterval(feuTricolore, 17000)

