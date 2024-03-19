//task01
var a = 5;
var b = 2;
var c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
//task02
var weightInkg = 45;
var heightInMeters = 1.75;
var bmi = weightInkg / (heightInMeters * heightInMeters);
console.log("Your BMI is ".concat(bmi));
