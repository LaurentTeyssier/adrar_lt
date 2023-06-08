let x=0;
let y=0;
let z=0;

while(10*x >y){
    x= (y*z)%10000;
    y= (3*z)%10000;
    z= (7*z)%10000;

}

console.log(x);
console.log(y);
console.log(z);