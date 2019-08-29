//testing

let sentence = "The dog chased the cat."
let regex = /the/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);


console.log(result);


// more testing

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

console.log(result);


// i would disregard if its capital or not

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; //
let result = fccRegex.test(myString);

//matching


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);


//testing multiple things


let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log(result);

// test is true or false
// match is how many are there


let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g; // g we use it more than once bc of comma
testStr.match(ourRegex);

console.log(result);

//

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result = twinkleStar;

console.log(result);


// mathching


let bgRegex = /b[aiu]g/;

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result);


// range of use in the alphabet



let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);

console.log(result);


//matching numbers and letters


let reCriminals = /C+/; // will match the Cs

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);



///

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig;
let result = quoteSample.match(myRegex);

console.log(result);


//example

let string = "titanic";
let regex = /t[a-z]*i/; //* means 0 or more occurances
string.match(regex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/;
let result = text.match(myRegex);

console.log(result);


//beggining and end of a string



let caboose = "The last car on a caboose train is the ";
let lastRegex = /caboose$/; // checking if its valid end

let lastRegex = /^caboose/; // checking if it valid in the beggining
let result = lastRegex.test(caboose);
console.log(result);
