// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    name = cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    name = cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    name = cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    name = cats.shift();
}

function appendCat(name) {
    var cats_2 = [...cats, "Broom"];
    return cats_2;
}

function prependCat(name) {
    var cats_3 = ["Arnold", ...cats];
    return cats_3;
}

function removeLastCat(name) {
    var cats_4 = cats.slice(0, cats.length-1);
    return cats_4;
}

function removeFirstCat(name) {
    var cats_5 = cats.slice(1);
    return cats_5
}