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

// let today = "Sunday";

// const isItWeekend = (day) => day == "Saturday" || day == "Sunday"?true:false;

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


const thirtyThree = (num) => {
    console.log(num + 33);
}

thirtyThree(99); // 132

const addition = (num1, num2) => {
    console.log(num1 + num2);
}

addition(123, 456); // 579