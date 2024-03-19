//task01

let a:number = 5;
let b:number = 2;
let c:number ;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);

//task02

let weightInkg = 45;
let heightInMeters = 1.75;
let bmi = weightInkg/(heightInMeters*heightInMeters)
console.log(`Your BMI is ${bmi}`);