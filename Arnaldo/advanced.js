// Exercise 1
let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;

let newC = Number(c);
console.log(typeof newC);
let newD = Number(d);
console.log(typeof newD);
console.log(a + b + newC + newD + e);
let sum = (a + b + newC + newD + e);
console.log(sum);

let f = '1';

let g = 15;

let h = 8;

let i = "1";

let newF = Number(f);
console.log(typeof newF);
let newI = Number(i);
console.log(typeof newI);
let sum2 = (newF + g + h + newI);
console.log(sum2);

let sum3 = (sum / sum2);
console.log(sum3);

// Exercise2
let people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
people.shift("Greg");
console.log(people);
people.unshift("Matt");
console.log(people);
people.pop("James");
console.log(people);
people.push("Arnaldo");
console.log(people);
console.log(people.slice(2));
console.log(people.indexOf("Mary"));