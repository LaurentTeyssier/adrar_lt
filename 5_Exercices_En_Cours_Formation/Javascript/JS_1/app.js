console.log('Bienvenue dans Javascript');
/**
 * **************************************
 * 1-SETUP : DEFER
 * **************************************
 ** Antérieur à la vague HTML5, l'attribut defer existait déjà dans les "anciennes" versions
 ** d'Internet Explorer. Il signifie que le navigateur 
 *! peut charger le(s) script(s) en parallèle, sans stopper le rendu de la page HTML.
 *! Contrairement à async, l'ordre d'exécution des scripts est préservé,
 *! en fonction de leur apparition dans le code source HTML. 
 *? Il est par ailleurs reporté à la fin du parsing du DOM (avant l'événement DOMContentLoaded).
 * De nos jours, cet attribut présente moins d'intérêt car les navigateurs
 * disposent par défaut de techniques internes pour télécharger les 
 * ressources en parallèle sans nécessairement attendre les autres.
 */

/**
 * **************************************
 * SETUP : ASYNC
 * **************************************
 * *Nouveau venu dans HTML5, async signifie que le script pourra être exécuté de façon asynchrone,
 ** dès qu'il sera disponible (téléchargé). Cela signifie aussi que le navigateur 
 ** n'attendra pas de suivre un ordre particulier si plusieurs balises <script> sont présentes,
 ** et ne bloquera pas le chargement du reste des ressources, notamment la page HTML. 
 *? L'exécution aura lieu avant l'événement load lancé sur window 
 *? et ne sera valable que pour les scripts externes au document, 
 *? c'est-à-dire ceux dont l'attribut src mentionne l'adresse.
 *? Ce comportement est bien pratique pour gagner en temps de chargement,
 *! il faut cependant l'utiliser avec prudence : si l'ordre n'est pas respecté,
 *! un fichier exécuté de façon asynchrone ne pourra attendre le chargement d'un précédent,
 *! par exemple s'il en utilise des fonctions voire un framework.
 *! Il ne faudra pas non plus compter appeler document.write() pour écrire dans le document HTML
 *! puisqu'il sera impossible de savoir à quel moment les actions seront déclenchées.
 */ 


 /*
 EXERCICES
 AVEC
 DES
 VARIABLES
 */


//  let myStr = "bravo le veau";
//  let myInt = 44;
//  let myFloat = 44.4;
//  let myArr = [4, 4, 4];
//  let myObj = {
//     firstname: 'John',
//     name : 'Doe',
//     email: 'johndoe@gmail.com'
// };
// let myBoolean = true;


// const salutations = () => {
//     return 'hello world!';
// }

// console.log(myStr);
// console.log(myInt);
// console.log(myFloat);
// console.log(myArr);
// console.log(myObj);
// console.log(salutations());

// let today = "Monday";

// const isItWeekend = (day) => day == "Saturday" || day == "Sunday"?console.log("oui"):console.log("non");

// console.log(isItWeekend(today));

// let position = "sixth place";

// switch(position) {
//     case "first place":
//         console.log("Gold medal!")
//         break;
//     case "second place":
//         console.log("Silver medal")
//         break;
//     case "third place":
//         console.log("Bronze medal")
//         break;
//     default:
//         console.log("Thanks for running!")
//         break;

// }

// class Language {
//     constructor (name, framework){
//     this.name=name;
//     this.framework = framework;
// }
// }

// const javascript = new Language ("Javascript", "React");

// console.log(javascript);
   

/*
EXERCICES
AVEC
DES
NOMBRES
*/


// let count = 0;
// console.log(count); // 0
// console.log(count+=8); // 8
// count--;
// console.log(count); // 7
// console.log(count*=2); // 14
// count++;
// console.log(count); // 15
// console.log(count/=1.5); // 10


// console.log(835*(655/count*2+(8*6)-count))  // 141115

// const crazyOperation = (num) => {
//     return count*= (850 -6 +num -10.25 +25.8 +68)/ num;
// }

// crazyOperation(-5);
// console.log(count)


/*
EXERCICES
AVEC
DES
STRINGS
*/
// const date = "12-12-2012"
// const clientFirstName = "Jean"
// const clientName = "Jack";
// const pizza = "Pizza Hawaienne";
// const pizzeria = `"La Pizzeria Raffinata"`;
// const blagues = [`Qu'est-ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre ? "Arrête de me trancher la route"`,
//  `Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils ? "Suis ta pâte et tout ira bien !"`];

// // const sumUpOrderPhrase = `Bonjour cher `+ clientFirstName + ` `+ clientName + `, merci d'avoir commandé chez ` + pizzeria + `, votre pizza : ` + pizza +`, arrive sous 30 minutes` + `\n` + blagues[Math.floor(Math.random()*blagues.length)];
// const sumUpOrderPhrase = `le ${date} Bonjour cher ${clientFirstName} ${clientName}, merci d'avoir commandé chez ${pizzeria}, votre pizza : ${pizza}, arrive sous 30 minutes` + `\n`
// + blagues[Math.floor(Math.random() * blagues.length)];
// console.log(sumUpOrderPhrase);



/*
EXERCICES
AVEC
DES
ARRAYS
*/







// let user = "Joe";
// let age = 54;
// let passions = ["saut à l'élastique", "sieste"];
// let myObj = {
//     firstname: 'John',
//     name : 'Doe',
//     email: 'johndoe@gmail.com'
// };


// class Language {
// constructor (name, framework){
// this.name=name;
// this.framework = framework;
// }
// }

// const Javascript = new Language ("Javascript", "React");



// let tabUser = [user, age, passions, myObj, Javascript];

// console.log(tabUser);
// console.log(tabUser[2]);
// console.log(tabUser[2][1]);
// console.log(tabUser[3]);
// console.log(tabUser[3].email);
// console.log(tabUser[4]);
// console.log(tabUser[4].framework);

// let leNom = "Gadgeto";
// let lePrenom = "Gogo";
// let laPhrase = [];
// let lesInitiales = `${leNom[0]}${lePrenom[0]}`; // leNom[0] + lePrenom[0];

// laPhrase.push(leNom, lePrenom, lesInitiales);

// console.log(laPhrase);


/*
EXERCICES
AVEC
DES
FONCTIONS
*/


// const thirtyThree = (num) => {
//     console.log(num + 33);
// }

// thirtyThree(99); // 132

// const addition = (num1, num2) => {
//     console.log(num1 + num2);
// }

// addition(123, 456); // 579

// function calculReturn(unNombre, unAutreNombre){
//     return unNombre + unAutreNombre
// }
// //! Ici le calcul qui est return par la fonction est stocké dans une variable
// //! resultat
// let resultat = calculReturn(22,99);
// console.log(resultat);
// // ou executer la fonction quand on a besoin
// console.log('Le résultat : ', resultat);

// let something = 44;
// function functionBugParent() {
//     let something = 9;
//     console.log(something);
//     console.log(lesNews);

//     function functionBugEnfant() {
//         let lesNews = `il est 99h67`;
//     }
//     functionBugEnfant();
// };

// functionBugParent();

// console.log(something);

// let notePhilo = 16.5;
// let noteSport = 12;

// const moyNote = (note1, note2) => {
//       return (note1 + note2)/2;
// }

// console.log(moyNote(notePhilo, noteSport));

// let notes = [18,13,19];

// const moyenne = (arr) => {
//     let total = 0;
//     for(let i = 0; i<arr.length; i++) {
//         total += arr[i];
//     }
//     let moy = total/arr.length;
//     if(moy>= 15){
//         console.log("Très Bien !")
//     } else if(moy>=10) {
//         console.log("Assez Bien !")
//     } else {
//     console.log("Note Insuffisante !")
//     }
// }

//     moyenne(notes);


    // switch(true){
    //     case moy>=15 :
    //         console.log("Très Bien !")
    //         break;
    //     case moy>=12 :
    //         console.log("Assez Bien !")
    //         break;
    //     default :
    //         console.log("Note Insuffisante !")
    //         break;        
    // }


// let objectUser ={
//     prenom:"Jack",
//     nom: "Ady",
//     passions: {
//         passion1:"saut à l'élastique",
//         passion2:"sieste"}

// }

// console.log(objectUser.nom);
// console.log(objectUser.passions);
// console.log(objectUser.passions.passion2);

// objectUser.nom = "O'Lantern";
// objectUser.passions.passion1 = "apéritif";

// console.log(objectUser.nom);

// console.log(objectUser);

// let angryMan = {
//     firstname: "Joe",
//     name: "Dohn",
//     warcry() {console.log("Stop!")}
// };
// const userData = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true
// };
// for(const prop in userData){
//     console.log(`${prop}: ${userData[prop]}`)
// }
// // angryMan.warcry();

// // objectUser.warcry() {console.log("Let's go!")};

// let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];

// for(const film of listeFilm){
//     console.log(film)
// };

// listeFilm.forEach(x=>console.log(x));


// let film = ['Ultime Décision','Mission Alcatraz','Attack Force']
// let actor = ['bruce willis', 'nicolas cage', 'brad pitt']
// let combo = [];
// for(let i = 0; i<film.length; i++){
//     combo.push(film[i] + " " + actor[i]);
// }
        
// combo.forEach((pair) => console.log(pair));











// const clickButton = document.getElementById("button");
// const header = document.getElementsByTagName('h1');
// const parags = document.getElementsByTagName('p');

// clickButton.addEventListener ('click', turnRed );

// function turnRed() {
//     header.classList.add('red');
// }

// console.log(parags);
// console.log(parags[0]);
// const paragraphs = document.getElementsByTagName('p');
// const pWithClass = document.getElementsByClassName('super');
// const pWithId = document.getElementById('special');

// let textesTab = Array.from(paragraphs);
// console.log(textesTab);




// textesTab.map(x => x.innerText = "paragraphe modifié");
// for (let i =0; i<paragraphs.length; i+=2) {
//     paragraphs[i].style.color = "green";
// };

// !CHANGE 
// !MULTIPLE 
// !STYLE 
// !IN 
// !ONE 
// !FUNCTION

// textesTab.map(function(x,i){
//     x.innerHTML = "paragraphe modifié";
//     x.style.color = "green";
//     x.style.backgroundColor = "black";
//     x.style.fontSize = "25px";
//     console.log(i);
// });

// !
// !
// !
// !



// console.log(paragraphs);
// console.log(pWithClass);
// console.log(pWithId);




//Tableau et Html Collection des balises P
// let lesTxt = document.getElementsByTagName("p");
// let lesTxtArray = Array.from(document.getElementsByTagName("p"));

//Tableau de bolean
// let nombreBoolean = 10;     
// let boleanArray = new Array(nombreBoolean).fill(false);
// boleanArray[5] = !boleanArray[5];
// console.log(boleanArray);

// fonction pour changer état Bolean
// function boldeler(a) {
//     a = !a;
// }

// ajouter les condition de changement de bol à chaque p
// lesTxtArray.map(function(lesTxt,i){
//     lesTxt[i].addEventListener("click", (boldeler) => {
//     if ( boleanArray[i] == false) {
//         lesTxt.style.color="red";
//     }
//     else {
//         lesTxt.style.color="blue";
//     }
// })  
// });

// lesTxtArray.map(x => x.addEventListener("click", function(){

//     if(x.style.color == "red"){
//         x.style.color = "blue";
//     }
//     else {
//         x.style.color = "red";
//     }
// }));


    
let firstLink = document.querySelector('a');
console.log(firstLink);
let allLinks = document.querySelectorAll('a');
console.log(allLinks);



let firstTitle = document.querySelector('h1');
console.log(firstTitle);

let firstImg = document.querySelector('img');
console.log(firstImg);

// firstTitle.style.backgroundColor = 'black';
// firstTitle.style.color = 'chartreuse';



// firstTitle.className = 'laClasse';
// firstLink.href = 'https://www.google.com'
// firstImg.src = 'https://picsum.photos/200/300'


let myTitle = document.getElementById('mainTitle');
let myLinks = document.getElementsByTagName('a');
let isItFirstTitle = true;



for(let i = 0; i<myLinks.length; i++) {
    myLinks[i].addEventListener('click', () => {
        switch(i) {
            case i=0:
                myTitle.classList.add('myColor');
                break;
            case i =1:
                myTitle.classList.remove('myColor');
                break;
            case i =2:
                myTitle.classList.toggle('myColor');
                break;
        }
       
        
    });
}

myTitle.addEventListener('click', () => {
    if(isItFirstTitle) {
myTitle.innerText = "Where did the title go??!!";
isItFirstTitle = false;
    }else {
        myTitle.textContent = "D.O.M Events";
        isItFirstTitle = true;
    }
});

// myLinks[0].addEventListener('click', () => {
//     myTitle.classList.add('myColor');
    
// });

// myLinks[1].addEventListener('click', () => {
//     myTitle.classList.remove('myColor');
    
// });

// myLinks[2].addEventListener('click', () => {
//     myTitle.classList.toggle('myColor');
    
// });

