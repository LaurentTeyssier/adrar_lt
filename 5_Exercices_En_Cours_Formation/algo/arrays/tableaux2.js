// // // Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
// let myArr = [8,5,4,12,3,5,6,7,2,11,0,5,4,8,5,4,5];
// function arrLogLastElement(arr) {
//     console.log(arr[arr.length-1]);
// }
// arrLogLastElement(myArr);

// // // Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
// function arrReturnLastElement(arr) {
//     return arr[arr.length-1];
// }
// console.log(arrReturnLastElement(myArr));
// // // // Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
// function arrReturnMin(arr) {
//     let min = arr[0];
//     let minPos = 0;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//             minPos = i;
//         }
//     }
//     console.log(min);

//     }


// arrReturnMin(myArr);


// // // Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
// function arrReturnMax(arr) {
//     // console.log(Math.max(...arr));
//     let max = arr[0];
//     let maxPos = 0;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//             maxPos = i;
//         }
//     }
//     console.log(max);

//     }

// arrReturnMax(myArr);

// // // [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
// // function arrSecondMax(arr) {
//     let max = 0;
    
//     let secondMax = 0;
    
//     function arrSecondMax(arr){
//         for(let i = 0; i< arr.length; i++){
//             if(arr[i] > max){
//                 secondMax = max;
//                 max = arr[i];
                
//             }else if (arr[i] > secondMax){
//                 secondMax = arr[i];
//             }
//         }
//         return secondMax;
//     }
    
    
// console.log(arrSecondMax(myArr));

// // // Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

// let repeat = 0; 
// function repeatedNumber (arr, num){
//     for(let i = 0; i<arr.length; i++ ){
//         if(arr[i]==num){
//             repeat++;
//         }
//     }
//     return repeat;
// }
// console.log(repeatedNumber(myArr, 5));

// // // Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
// let exists = false; 
// function existingNumber (arr, num){
//     for(let i = 0; i<arr.length; i++ ){
//         if(arr[i]==num){
//             exists=true;
            
//         }
//     }
//     return exists;
// }
// console.log(existingNumber(myArr, 64));
// // // [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// // // Créer un tableau qui contient [1,2,3,...,7777].

// let emptyArr = [];
// for(i = 1; i<7778; i++){
//     emptyArr.push(i);
// }
// console.log(emptyArr);

// // // Créer un tableau qui contient [10,20,30,...,77770].
// let emptyArr2= emptyArr;
// for(i = 1; i<7778; i++){
    
//     emptyArr2[i]= emptyArr2[i]*10;
// }
// console.log(emptyArr2);

// // // En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
// let emptyArr3 = emptyArr2;
// for(i = 1; i<7778; i++){
//     emptyArr3[i]= emptyArr3[i]/2;
// }
// console.log(emptyArr3);
// // // Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// let arr50Pop = [50, 51, 10, 30, 200, 150, 145, 8, 65, 2, 4, 9];
// function pop50(arr){
//     while(arr[arr.length-1]<50){
//         arr.pop();
//     }
//     return arr;
// }

// console.log(pop50(arr50Pop));
// // // console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]
// let bigArr = [1, 45, 88, 54, 23, -100, 12];
// function thinBigArr(arr){
//     while(arr.length>4){
//         arr.pop();
//     }
//     return arr;
// }

// console.log(thinBigArr(bigArr));






// let lastTrain = 61500;

// let underground = [];

// let nextTrain = 600;

// let firstStop = (13*3600 + 41*60);

// let trainResume = (14*3600 + 26*60);



// for (let i =32700; i<=lastTrain; i+=nextTrain) {
        
//     underground.push(i);
// }

// console.log(underground);

// for(let i =0; i<underground.length; i++){
//     if(underground[i]>firstStop && underground[i]<trainResume){
//         underground[i]= underground[i]  + 180;
//     }
// }
// console.log(underground);




//SKITTLES

// "Rose", "rouge", "orange", "jaune", "vert", "bleu", "violet", "marron"
// 3,6,7,3,6,2,2,1
// 2,1,12,4,2,3,4,2
// 3,4,8,7,4,0,1,3
// 3,4,5,4,4,3,5,1
// 2,4,6,3,3,2,5,4
// 3,1,9,4,3,3,1,5
// 2,2,6,5,5,2,1,6
// 4,6,7,3,1,1,3,4
// 6,4,4,5,1,0,4,5
// 3,1,3,3,4,3,4,8
// 4,3,6,4,2,3,6,2
// 4,7,3,2,5,2,5,1
// 1,0,13,6,2,0,5,2
// 5,2,1,5,6,3,3,4
// 2,4,3,4,7,3,2,4
// 8,6,3,2,1,2,1,5
// 6,4,3,4,4,0,3,5
// 6,8,2,2,4,5,2,1
// 3,6,2,5,5,2,3,3


let boxes = [
    [
        ["rose" , 3], ["rouge" , 6], ["orange", 7], ["jaune", 3], ["vert", 6], ["bleu", 2], ["violet", 2], ["marron", 1]
    ],
    [
        ["rose" , 2], ["rouge" , 1], ["orange", 12], ["jaune", 4], ["vert", 2], ["bleu", 3], ["violet", 4], ["marron", 2]
    ],
    [
        ["rose" , 3], ["rouge" , 4], ["orange", 8], ["jaune", 7], ["vert", 4], ["bleu", 0], ["violet", 1], ["marron", 3]
    ],
    [
        ["rose" , 3], ["rouge" , 4], ["orange", 5], ["jaune", 4], ["vert", 4], ["bleu", 3], ["violet", 5], ["marron", 1]
    ],
    [
        ["rose" , 2], ["rouge" , 4], ["orange", 6], ["jaune", 3], ["vert", 3], ["bleu", 2], ["violet", 5], ["marron", 4]
    ],
    [
        ["rose" , 3], ["rouge" , 1], ["orange", 9], ["jaune", 4], ["vert", 3], ["bleu", 3], ["violet", 1], ["marron", 5]
    ],
    [
        ["rose" , 2], ["rouge" , 2], ["orange", 6], ["jaune", 5], ["vert", 5], ["bleu", 2], ["violet", 1], ["marron", 6]
    ],
    [
        ["rose" , 4], ["rouge" , 6], ["orange", 7], ["jaune", 3], ["vert", 1], ["bleu", 1], ["violet", 3], ["marron", 4]
    ],
    [
        ["rose" , 6], ["rouge" , 4], ["orange", 4], ["jaune", 5], ["vert", 1], ["bleu", 0], ["violet", 4], ["marron", 5]
    ],
    [
        ["rose" , 3], ["rouge" , 1], ["orange", 3], ["jaune", 3], ["vert", 4], ["bleu", 3], ["violet", 4], ["marron", 8]
    ],
    [
        ["rose" , 4], ["rouge" , 3], ["orange", 6], ["jaune", 4], ["vert", 2], ["bleu", 3], ["violet", 6], ["marron", 2]
    ],
    [
        ["rose" , 4], ["rouge" , 7], ["orange", 3], ["jaune", 2], ["vert", 5], ["bleu", 2], ["violet", 5], ["marron", 1]
    ],
    [
        ["rose" , 1], ["rouge" , 0], ["orange", 13], ["jaune", 6], ["vert", 2], ["bleu", 0], ["violet", 5], ["marron", 2]
    ],
    [
        ["rose" , 5], ["rouge" , 2], ["orange", 1], ["jaune", 5], ["vert", 6], ["bleu", 3], ["violet", 3], ["marron", 4]
    ],
    [
        ["rose" , 2], ["rouge" , 4], ["orange", 3], ["jaune", 4], ["vert", 7], ["bleu", 3], ["violet", 2], ["marron", 4]
    ],
    [
        ["rose" , 8], ["rouge" , 6], ["orange", 3], ["jaune", 2], ["vert", 1], ["bleu", 2], ["violet", 1], ["marron", 5]
    ],
    [
        ["rose" , 6], ["rouge" , 4], ["orange", 3], ["jaune", 4], ["vert", 4], ["bleu", 0], ["violet", 3], ["marron", 5]
    ],
    [
        ["rose" , 6], ["rouge" , 8], ["orange", 2], ["jaune", 2], ["vert", 4], ["bleu", 5], ["violet", 2], ["marron", 1]
    ],
    [
        ["rose" , 3], ["rouge" , 6], ["orange", 2], ["jaune", 5], ["vert", 5], ["bleu", 2], ["violet", 3], ["marron", 3]
    ]
    
];
let colors = 8;
let skittleNum=0;
let skittleBox=0;

function f1 (arr) {
    for(let i =0; i<7; i++){
        skittleBox += arr[0][i][1];

    }
    return skittleBox;
}
console.log(f1(boxes));