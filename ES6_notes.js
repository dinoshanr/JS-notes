// easy way to concatenate strings


let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;

const fullName = `${num1} ${word2}`;
// const fullName = `${num1 + num2} ${word2}`;

console.log(fullName);


//

const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

//this is to change whats up top
// const {firstName: dinoshan, lastName: romeltar} = personalInformation;
const {firstName, lastName} = personalInformation;

//if i change the name in const I must change it in console.log
console.log(`${firstName} ${lastName}`);



// object literal



function addressMaker(city, state) {
    const newAdress = {newCity: city, newState: state};

    // or ( this is the old method below)

    //     const newAdress = {newCity: city, newState: state};


    console.log(newAdress);
}

addressMaker('Austin', 'Texas');


// object literal challenge


function addressMaker(address) {
    const {city, state} = address;


    const newAddress = { city, state, country: 'United States'};

    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({city: 'Austin', state: 'Texas'});



// spread operator

// wrapping value of the example1 into example2


let example1 = [1,2,3,4,5,6];
let example2 = [...example1];

example2.push(true);
//will push the true boolean in the end to example2 only


console.log(example2);



//Rest operator
//function added with the parameter called nums below

function add(...nums) {

    console.log(nums);
}

add(4, 5, 7, 8, 12)



//


function add(...nums) {
    let total = nums.reduce((x, y) => x + y);

    console.log(total);
}

add(4, 5, 7, 8, 12)


// for each


var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
