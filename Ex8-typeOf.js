let x = 'Elephant'
console.log('The value of x is: ' + x) //prints value of x
console.log('The type of value of x is: string')
console.log(typeof(x))//prints type of x

let y = 5
console.log('The value of y is: ' + y)
console.log('The type of value of y is: number')
console.log(typeof(y))//prints type of y

let myFavoriteAnimals = ['Dog', 'Elephant', 'Monkey']
console.log('The value of myFavoriteAnimals is: ' + myFavoriteAnimals)
console.log('The type of value of myFavoriteAnimals is: object')
console.log(typeof(myFavoriteAnimals))//prints type of myFavoriteAnimals

let isBoolean = true
console.log('The value of x is: ' + isBoolean)
console.log('The type of value of isBoolean is: boolean')
console.log(typeof(isBoolean))//prints type of isBoolean

//compare typeof variables
if(typeof(x)===typeof(y)||typeof(x)===typeof(myFavoriteAnimals)||typeof(x)===typeof(isBoolean)||typeof(y)===typeof(myFavoriteAnimals)||typeof(y)===typeof(isBoolean)||typeof(myFavoriteAnimals)===typeof(isBoolean)){
    console.log("The typeof variables is of same type") // prints if type of any variables is same
}else
console.log("The variables are not of same type")// prints if type of none of the variables is same
