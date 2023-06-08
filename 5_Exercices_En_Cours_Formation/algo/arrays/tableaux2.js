// // Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
let myArr = [8,5,4,12,3,5,6,7,2,11,0,5,4,8,5,4,5];
function arrLogLastElement(arr) {
    console.log(arr[arr.length-1]);
}
arrLogLastElement(myArr);

// // Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function arrReturnLastElement(arr) {
    return arr[arr.length-1];
}
console.log(arrReturnLastElement(myArr));
// // // Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function arrReturnMin(arr) {
    let min = arr[0];
    let minPos = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            minPos = i;
        }
    }
    console.log(min);

    }


arrReturnMin(myArr);


// // Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function arrReturnMax(arr) {
    // console.log(Math.max(...arr));
    let max = arr[0];
    let maxPos = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            maxPos = i;
        }
    }
    console.log(max);

    }

arrReturnMax(myArr);

// // [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
// function arrSecondMax(arr) {
    let max = 0;
    
    let secondMax = 0;
    
    function arrSecondMax(arr){
        for(let i = 0; i< arr.length; i++){
            if(arr[i] > max){
                secondMax = max;
                max = arr[i];
                
            }else if (arr[i] > secondMax){
                secondMax = arr[i];
            }
        }
        return secondMax;
    }
    
    
console.log(arrSecondMax(myArr));

// // Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

let repeat = 0; 
function repeatedNumber (arr, num){
    for(let i = 0; i<arr.length; i++ ){
        if(arr[i]==num){
            repeat++;
        }
    }
    return repeat;
}
console.log(repeatedNumber(myArr, 5));

// // Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
let exists = false; 
function existingNumber (arr, num){
    for(let i = 0; i<arr.length; i++ ){
        if(arr[i]==num){
            exists=true;
            
        }
    }
    return exists;
}
console.log(existingNumber(myArr, 64));
// // [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// // Créer un tableau qui contient [1,2,3,...,7777].

let emptyArr = [];
for(i = 1; i<7778; i++){
    emptyArr.push(i);
}
console.log(emptyArr);

// // Créer un tableau qui contient [10,20,30,...,77770].
let emptyArr2= emptyArr;
for(i = 1; i<7778; i++){
    
    emptyArr2[i]= emptyArr2[i]*10;
}
console.log(emptyArr2);

// // En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let emptyArr3 = emptyArr2;
for(i = 1; i<7778; i++){
    emptyArr3[i]= emptyArr3[i]/2;
}
console.log(emptyArr3);
// // Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
let arr50Pop = [50, 51, 10, 30, 200, 150, 145, 8, 65, 2, 4, 9];
function pop50(arr){
    while(arr[arr.length-1]<50){
        arr.pop();
    }
    return arr;
}

console.log(pop50(arr50Pop));
// // console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]
let bigArr = [1, 45, 88, 54, 23, -100, 12];
function thinBigArr(arr){
    while(arr.length>4){
        arr.pop();
    }
    return arr;
}

console.log(thinBigArr(bigArr));






let lastTrain = 61500;

let underground = [];

let nextTrain = 600;

let firstStop = (13*3600 + 41*60);

let trainResume = (14*3600 + 26*60);



for (let i =32700; i<=lastTrain; i+=nextTrain) {
        
    underground.push(i);
}

console.log(underground);

for(let i =0; i<underground.length; i++){
    if(underground[i]>firstStop && underground[i]<trainResume){
        underground[i]= underground[i]  + 180;
    }
}
console.log(underground);

