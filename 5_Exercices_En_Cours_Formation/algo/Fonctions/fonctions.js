// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.

function f1(){
    console.log(17);
}


// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17;
}

// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(num){
    console.log(num*3);
}

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(33);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(num){
    return num*2;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(a, b){
    console.log(a+b);

}

// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42, 77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(a, b){
    return a+b;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42, 77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.

a+= f6(42, 77);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(x, y){
    if(x>y){
        return x;
    } else {
        return y;
    }
}
console.log(f7(136,244));

// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).

console.log("fonction f8 version 1");
function f8(x, y, z){
    if(x>=y && x>=z){
        return x;
    } else if(y>=z){
        return y;
    }else{
        return z;
    }
}

console.log(f8(164,563,874));



console.log("fonction f8 version 2");
function f8Two(x, y, z){
    if(f7(x, y)==x && f7(x, z)==x){
        return x;
    } else if ( f7(y, z)==y){
        return y;
    } else {
        return z;
    }
    

}

console.log(f8Two(164,563,874));

console.log("fonction f8 version 3");
function f8Three(x, y, z){
    return Math.max(f7(x, y), z);
}
console.log(f8Three(952,563,874));

console.log("fonction f8 version 4");
function f8Four(x, y, z){
    let max_1_2 = f7(x, y);
    return f7(max_1_2, z);
}
console.log(f8Four(654, 235, 487));


console.log("fonction f8 version 5");
function f8Four(x, y, z){    
    return f7(f7(x, y), z);
}
console.log(f8Four(654, 235, 487));
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(word, num){
    for(let i=0; i<num; i++){
        console.log(word);
    }
}

f9("number", 8);


function f9Two(word, num) {
    return `${word}\n`.repeat(num);
}

console.log(f9Two("abricot", 5));