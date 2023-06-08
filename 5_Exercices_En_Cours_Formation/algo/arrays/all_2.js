// Exercice all2_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : position_biggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1


// Exercice all2_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.

// Exercice all2_3 : écrire une fonction qui retourne la somme des valeurs positives d'une liste.

// Exercice all2_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'une liste.
let myArr =[10, 50, 500, 620, 458, 785, -7784, 841, 84151, -8498941, 874561, 8989741, -541561];

function arrReturnMax(arr) {
    
    let max = arr[0];
    let maxPos = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            maxPos = i;
        }
    }
    console.log(maxPos);

    }

arrReturnMax(myArr);

function arrSum(arr){
    let a=0;
    
    for(let i = 0; i< arr.length; i++){
        a+=arr[i];

    }
    return a;
}

console.log(arrSum(myArr));

function arrSumPos(arr){
    let a=0;
    
    for(let i = 0; i< arr.length; i++){
        if(arr[i]>0){
            a+=arr[i];
        }
    }
    return a;
}

console.log(arrSumPos(myArr));

function arrSumNeg(arr){

    let negSum = arrSum(arr)-arrSumPos(arr);
    return negSum;

}

console.log(arrSumNeg(myArr));