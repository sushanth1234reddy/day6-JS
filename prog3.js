//prog 3
//check for largest number among three numbers
//using ternery operator and if-else
let a=10;
let b=20;
let c=5;

if(a>b && a>c){
    console.log("a is the largest number");
}
else if(b>a && b>c){
    console.log("b is the largest number");
}
else{
    console.log("c is the largest number");
}

let x=10;
let y=5;
let z=2;

let ans= (x>y && x>z)? "x is the largest":"x is not the greatest";
console.log(ans)