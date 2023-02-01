let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(cars.sort());

let fruits = ["apple", "banana", "kiwi"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.pop("orange");
console.log(fruits);

let animals = ["monkey", "horse", "dog"];
console.log(animals);
animals.sort();
console.log(animals);
animals.unshift("cat");
console.log(animals);

let b = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
let ex = new Array();
ex = b.split('/').join("<br>");
console.log(ex);
document.write(ex);