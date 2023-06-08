// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).

// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.

// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.
let unorderedArr = [82500, 27209, 67434, 74967, 27718, 27676, 46821, 23936, 38437];
// function swapIndex(arr, i) {
//     for(let j = 0; j<arr.length; j++){
//         for(let i=0; i<arr.length; i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=0;
//                 temp=arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1]= temp;
//             }
//         }
//     }        
//     return arr;
// }

// console.log(swapIndex(unorderedArr, 5))

function orderFirstIndex(arr, i){
    if(arr[i]>arr[i+1]){
        let temp=0;
        temp=arr[i];
        arr[i]= arr[i+1];
        arr[i+1]=temp;
    }
    return arr;
}

console.log(orderFirstIndex(unorderedArr, 0));

function orderAllIndex(arr){
    for(let i =0; i< arr.length; i++){
        orderFirstIndex(arr, arr[i]);
        
    }
    return arr;
}

console.log(orderAllIndex(unorderedArr));

// function orderWholeArray(arr)