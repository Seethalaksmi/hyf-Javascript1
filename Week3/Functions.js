//1.  Create a function that takes 3 arguments and returns the sum of the these arguments.

function Sum(num1, num2, num3) { // Defining the function:
    return num1 + num2 + num3;
}
console.log(Sum(1, 2, 3)); // Calling & log the function:

//2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
    //console.log( 'a ' + color + ' car'); 
    return (console.log(`a ${color} car`));
}
colorCar('red');

//3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let myCar = {
    color: "red",
    model: 1983,
    name: "ford"
}
function car(obj) {
    console.log(obj);
}
car(myCar);

//4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
    let vehicle = "";
    if (code === 1) {
        vehicle = "car";
    } else if (code === 2) {
        vehicle = "bike";
    }
    return (console.log('a ' + color + " " + vehicle));
}
vehicleType("blue", 1);

//5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

/*if (3 === 3) {
    console.log("yes");
  } else {
    console.log("no");
  }*/

console.log(3 === 3 ? 'yes' : 'no');

//6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicleType(color, code, age) {
    let vehicle = "";
    if (code === 1) {
        if (age > 0) {
            vehicle = "used car";
        } else
            vehicle = "new car";
    } else if (code === 2) {
        {
            if (age > 0) {
                vehicle = "used bike";
            } else
                vehicle = "new bike"
        }

    }
    return (console.log('a ' + color + " " + vehicle));
}
vehicleType("blue", 1, 4);

//7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
listOfVehicles = ["motorbike", "caravan", "bike", "cycle"];

//8. How do you get the third element from that list?
console.log(listOfVehicles[2]);

//9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehiclesType(color, code, age) {
    let vehicle = "";
    if (age > 1) {
        vehicle = "used";
    } else {
        vehicle = "new";
    }
    return (console.log('a ' + color + " " + vehicle + " " + listOfVehicles[code - 1]));
}
vehiclesType("green", 3, 1);

//10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
let advertisement = ' ';
for (let i = 0; i < listOfVehicles.length; i++) {
    if (i === listOfVehicles.length - 1) {
        advertisement += listOfVehicles[i] + 's.';

    }

    else if (i === listOfVehicles.length - 2) {
        advertisement += listOfVehicles[i] + 's and ';

    }
    else {
        advertisement += listOfVehicles[i] + 's, ';

    }
}

console.log(`Amazing Joe's Garage, we service ` + advertisement);

//11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
listOfVehicles.push("car");
let advertisement = ' ';
for (let i = 0; i < listOfVehicles.length; i++) {
    if (i === listOfVehicles.length - 1) {
        advertisement += listOfVehicles[i] + 's.';

    }

    else if (i === listOfVehicles.length - 2) {
        advertisement += listOfVehicles[i] + 's and ';

    }
    else {
        advertisement += listOfVehicles[i] + 's, ';

    }
}
console.log(`Amazing Joe's Garage, we service ` + advertisement);

//12. Create an empty object.
let emptyObject = {};

//13. Create an object that contains the teachers that you have had so far for the different modules.

let teachers = { Teacher: ['christer', 'Garima', 'Gabe', 'Ivy', 'Max'] };

//14. Add a property to the object you just created that contains the languages that they have taught you.
teachers = { Teacher: ['christer', 'Garima', 'Gabe', 'Ivy', 'Max'], languages: ['Html', 'css', 'Javascript'] };

//15. Write some code to test two arrays for equality using == and ===. Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
x == y ? console.log('x and y are equal') : console.log('x and y are not equal');
z == y ? console.log('z and y are equal') : console.log('z and y are not equal');
z == x ? console.log('z and x are equal') : console.log('z and x are not equal');
x === y ? console.log('x and y are strictly equal') : console.log('x and y are not strictly equal');
x === z ? console.log('x and z are strictly equal') : console.log('x and z are not strictly equal');
z === y ? console.log('z and y are strictly equal') : console.log('z and x are not strictly equal');

/*What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
x == y --> x and y are not equal
x === y --> x and y are not strictly equal
z == y --> z and y are equal
z == x --> z and x are not equal*/

//16. Take a look at the following code:

let o1 = { foo: "bar1" };
let o2 = { foo: "bar" };
let o3 = o2;
/* Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
Does the order that you assign (o3 = o2 or o2 = o3) matter?
Yes changing o2 changes o3. No changing 01 not changes 03.
yes o3=o2 returns o3 = obj o2; whereas o2=o3 returns error where o3 is undefined or  o2 is already declared*/

console.log(o3);

//17. What does the following code return? (And why?)

let bar = 42;
return (console.log(typeof typeof bar)); // here typeof typeof bar is string --> as typeof 42 is number but typeof number is string.
/*‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.*/
