
//GA example

const luckyNumbers = [13, 42, 7, 28];
luckyNumbers[0] = 99;
luckyNumbers[2] = luckyNumbers[0] - luckyNumbers[2];
console.log(luckyNumbers);

//

const numbers = [10, 20, 30, 40];
console.log(numbers.length);

//

const aboutMe = {
  name: "Lisa Simpson",
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};
console.log(aboutMe.hometown);

console.log("Hello! My name is " + aboutMe.name + " and I am " + aboutMe.age + " years old.")


//

// Older way:
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);

// Newer way:
const calculateTotal = (price, salesTaxRate) => {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);


//

const h1ID = document.querySelector('h1').getAttribute('id');
// This would store the ID attribute of the <h1> in the variable called h1ID.

document.querySelector('#title').setAttribute('class', 'blue');
// This would give the element with the ID of "title" a class of "blue."

document.querySelectorAll('p').removeAttribute('class');
// This would remove the class attribute from all <p> elements.



//


const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match.";
paragraph.setAttribute("class", "registration-error");

//


const buckledUp = true;

if(buckledUp === false){
  console.log("You are not buckled up. Click it or ticket!");
}else{
  console.log("You buckled up your seat belt. What a safe driver you are!");
}




































let firstName = "dinoshan";
let lastName = "romeltar";

console.log(firstName + ' ' + lastName);

or

console.log(`${firstName} ${lastName}`);


// will split the space or letters

let firstName = 'Dylan';
let lastName = 'Israel';



console.log(`${firstName} ${lastName}`.split(''));


// uppercase


let firstName = "dinoshan";
let lastName = "romeltar";

console.log(`${firstName} ${lastName}`.toUpperCase());



// JS Nuggets: 10 Common Array Methods

var arr = ["a", "b", "c"];

arr.push("d"); //push will add something to array to end
console.log(arr);

arr.pop() //pop will remove last element at the end array
console.log(arr);


var arr2 = ["g", "q"];
arr.concat(arr2)
console.log(arr);

console.log(arr.join("!")); //join will add arrays together, can add element in as well

console.log(arr.reverse()); // will reverse elements in array
console.log(arr);

console.log(arr.shift()); //remove the first element and return it
console.log(arr);

arr.unshift("p")
console.log(arr);// will add element to end and will tell the length after

var arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.slice(1,3));


console.log(arr.splice(2, 2, "JS Nuggets"));
// first argument - where to count from
// second argument -count regularly # of elements you want to print after the first argument
// third argument - something you can add if you want


// concat arrays


var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

let both = arr1.concat(arr2);
console.log(both);



//locating arrays

let example1 = [5, 7, 6];

console.log(example1[2])


//rest operaor // create new

let example1 = ['Dylan', 5, true];

let example2 = [...example1] + ' ' + 'dinoshan'

console.log(example2);


//


let names = ['Dylan', 'Coding God', 'Israel'];

console.log(names[2]);


//


let example1 = {
  //values       //keys
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 30,
    cats: ['Milo', 'Tito', 'Achieles']
};

example1.age = 31; // replaces the age with a new age

//will print the keys
console.log(Object.keys(example1));

//will print the values
console.log(Object.values(example1));

//check to see if something exist (true or false)
console.log(example1.hasOwnProperty('firstName'));



//adding elements to objects
// will create a new object and create a new property

let example1 = {
    firstName: 'Dylan'
};


let example2 = Object.assign({}, example1);

example2.lastName = 'Israel';

console.log(example1);
console.log(example2);




//  LOOPS

let total = 0;

for (let i = 0; i < 5; i++) {
    console.log(i); // print numbers
}



// more LOOPS


let total = 0;

for (let i = 0; i < 5; i++) {
    total += i; // prints the total numbers
}

console.log(total);



//more LOOPS

let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
    total += numArray[i];
}



// function


function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 6))




// CHECK AGE && PRINT


function checkAge(name, age) {

  if(age >= 21) {
      return "Welcome, " + name + "!";
  } else {
      return "Go home, " + name + "!";
  }
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'


// check if number is greater than 10

function isGreaterThan10(num) {
if (num > 10) {
  return true;
}
else {
  return false; }
}


var output = isGreaterThan10(11);
console.log(output); // --> true


//check if its odd

function isOdd(num) {

  if (num % 2 === 1) {
      return true;
  } else {
    return false;
  }
}

var output = isOdd(9);
console.log(output); // --> true



// areBoth odd

function areBothOdd(num1, num2) {
 if (num1 % 2 === 1 && num2 % 2 === 1) {
     return true
 }
 else {
     return false
     }

}

var output = areBothOdd(1, 3);
console.log(output); // --> true



// is either even



function isEitherEven(num1, num2) {
  // your code here
  if (num1 % 2 === 0 || num2 % 2 === 0) {
      return true;
  }
  else {
      false;
  }
}

var output = isEitherEven(1, 4);
console.log(output); // --> true


// create a full name by using value and key from objects


var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'



function addFullNameProperty(obj) {
  let firstName = obj.firstName;
  let lastName = obj.lastName;

  let fullNameValue = firstName + " " + lastName;

  obj.fullName = fullNameValue
}




// get last element -----

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4



function getLastElement(array) {
  let lastIndex = array.length - 1;
  return array[lastIndex]; //specify
}



// add array to the front


var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

function addToFront(arr, element) {
  arr.unshift(element)
  return arr
}


//add to the back of an array


var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]


function addToBack(arr, element) {
  arr.push(element);
  return arr
}


//slice
//first number will start from the index
//second number will start count reg and cut


var arr = ["a", "b", "c", "d", "e", "f", "g"];

console.log(arr.slice(1,5));


//all element but firstName

var input = [1, 2, 3, 4, 5, 6, 7, 8];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

function getAllElementsButFirst(array) {
  return array.slice(1, 4)
}


//all elements but last console



var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]


function getAllElementsButLast(array) {
 var lastIndex = array.length - 1;
return array.slice(0, lastIndex);
}


// create new array and remove it from the back of array


var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]



function removeFromBackOfNew(arr) {
  let copyOfNew = arr.slice()
  copyOfNew.pop()
  return copyOfNew
}


//create a new array and emove from the front of new


var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

function removeFromFrontOfNew(arr) {
  let newArray = arr.slice()
  newArray.shift()
  return newArray
}

// see how many times a letter goes into a string


var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3


function countCharacter(str, char) {
  var count = 0

  for (var i = 0; i < str.length; i++) {
     if (str[i] === char) {
         count++;
     }
  }
  return count;
}


// get all the letters in a word in a array

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']


function getAllLetters(str) {
  // your code here
  if (str === "")
  return [];

  var splitLetters = str.split("")
  return splitLetters
}


//get all the words and put it in array1

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

function getAllWords(str) {
  // your code here
  if (str === "")
  return [];

  var splitLetters = str.split(" ")
  return splitLetters
}



//remove the last element in an array1

var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]

function removeFromBack(arr) {
      arr.pop()
   return arr
}


//iterate through object then delete key larger than num

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }


function removeNumbersLargerThan(num, obj) {
  for (var key in obj) {
      if (obj[key]  === "number" && obj[key] > num) {
          delete obj[key];

      }
  }
}

//iterate through object then delete key smaller than num

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }



function removeNumbersLessThan(num, obj) {
  for (var key in obj) {
      if(typeof obj[key] === "number" && obj[key] < num) {
          delete obj[key]
      }
  }
}


// remove even values but make sure its a num too


var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }


function removeEvenValues(obj) {
  for (var key in obj) {
      if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
          delete obj[key]
      }
  }
}


// count the number of keys


var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3

function countNumberOfKeys(obj) {
    var count = 0;
  for(var key in obj) {
      count += 1
  }
  return count;
}


// remove array in an objects

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }


function removeArrayValues(obj) {
 for (var key in obj) {
     if(Array.isArray(obj[key]) === true) {
         delete obj[key]
     }
 }
}


// remove double space and make it single space



var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"



function convertDoubleSpaceToSingle(str) {
 var split = str.split('  ')
 var joined = split.join(' ')
 return joined
}


// unshift - move element in front of array to front and make new array

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); --> [1, 2]

function addToFrontOfNew(arr, element) {
var copyOfNewArr = arr.slice()
copyOfNewArr.unshift(element)
return copyOfNewArr

}

//check how many character of letter A is in the string

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2


function getIndexOf(char, str) {
  for(var i = 0; i < str.length; i++ ) {
      if (char === str[i]) {
          return i;
      }
  }
      return -1;
}

//  longest word .. check which word is the biggest

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3


function findMaxLengthOfThreeWords(word1, word2, word3) {
  var array = [word1, word2, word3];

  var maxLength = word1.length;

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length
    }
  }
  return maxLength
}


// reverse a string

function reverseString(str) {
  const strArr = str.split('');
  strArr.reverse();
  return strArr.join('');
}

//or

// return str.split('').reverse().join('');

var output = reverseString('hello')
console.log(output)


//check if palindrome


function isPalindrome(str) {

const revString = str.split('').reverse().join('')
return revString === str;

}

const output = isPalindrome('racecar');
console.log(output);


//reverse an integer

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString) * Math.sign(int);
}



const output = reverseInt(12345);

console.log(output);


//capitalize first word in a sentence


function capitalizeLetters(str) {

    return str
      .toLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');

}

const output = capitalizeLetters('i love javascript');
console.log(output);


// find out the max character in a string




// fizzBuzz

function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0)
    console.log('Buzz');
    else {
      console.log(i);
    }
  }
}

const output = fizzBuzz();

// make arrays into in big array



function flattenArrays(arrays) {
  return [].concat(...arrays);

}

const output = flattenArrays([[1, 2], [3, 4], [5, 6], [7]])
console.log(output);



// palindrome



function isPalindrome(str) {
  const revString = str.split('').reverse().join('')

return revString === str;
}


const output = isPalindrome('racecar');

console.log(output);

//adding all function
