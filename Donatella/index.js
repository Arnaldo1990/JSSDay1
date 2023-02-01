//basics
let age = "25";
console.log(`Hi my name is Martin and I am ${age} years old`);

let players = ['Martin', 'Thomas', 'Peter', 'Mathias', 'Niki'];
console.log(`The most valuable player of the match is ${players[2]}`);

//intermediate
let cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];
console.log(cars.sort());

let fruits = ['apple', 'banana', 'kiwi'];
console.log(fruits);
fruits.push('orange');
console.log(fruits);
fruits.pop('orange');
console.log(fruits);

let animals = ['monkey', 'horse', 'dog'];
console.log(animals.sort());
animals.unshift('cat');
console.log(animals);

let text = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
let sep = new Array();
sep = text.split('/').join("<br>"); //breaks the array and splits the words in separate lines
console.log(sep)
document.write(sep); //prints the words in the browser

// console.log(sep.sort());

// advanced

/* Exercise 1
Sum the following variables and store the result in one new variable: */
let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;

let newC = Number(c);
let newD = Number(d);
console.log(typeof newC);
console.log(typeof newD);
console.log(a + b + newC + newD + e);
let sum = (a + b + newC + newD + e);
console.log(sum);

//Multiply the following variables and store the result in one new variable:
let f = '1';

let g = 15;

let h = 8;

let i = "1";


let newF = Number(f);
let newI = Number(i);
console.log(typeof newF);
console.log(typeof newI);
console.log(newF * g + h + newI);
let product = (newF * g + h + newI);
console.log(product);

//Divide the two results that you got from the arithmetic operations and print the result in the web browser.

console.log(sum / product);

//Exercise 2

let people = ['Greg', 'Mary', 'Devon', 'James'];
console.log(people);
people.shift();
console.log(people);
people.unshift('Matt');
console.log(people);
people.pop();
console.log(people);
people.push('Donatella');
console.log(people);
people.splice(1, 1);
console.log(people);
console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));
console.log(people);
people.shift();
people.pop();
console.log(people);
people.unshift('Greg', 'Mary');
console.log(people);
people.push('James');
console.log(people);
people.splice(2, 1, 'Elisabeth', 'Anna');
console.log(people);

//Exercise 3
let multi = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
]
console.log(multi[1][1], multi[4][2], multi[5][3], multi[2][3], multi[2][1]);

// challenge
let mess = "<br>\"Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up\".";

let clean = new Array();
clean = mess.split('$').join(" "); //breaks the array and separates words with a space
console.log(clean)
document.write(clean); //prints the words in the browser
document.getElementById("test").innerHTML = clean;