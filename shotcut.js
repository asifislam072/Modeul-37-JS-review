const money = 80;
let food;
if(money > 100){
    food = 'birani'
}
else{
    food= 'cha kha'
}
console.log(food)

let food1 = `${money>100 ? 'birani' : 'cha kha'}`
console.log(food1)


let rice = 300;
let drink = (money > 10 && rice > 200) ? 'birani' : "tk nai"
console.log(drink)

// number to string shotcut
let number = 52;
console.log(number)
let stringNumber = number + '';
console.log(stringNumber)


// string to number convet
let string = '53'
console.log(string)

// *****************************************
// not undestent +string
let numbrConvat = +string;
console.log(numbrConvat)


// ternary oparator
const isActive = true;
const showUser = () => console.log('display user')
const displayUser = () => console.log('hide user')
isActive ? showUser() : displayUser()
// console.log(isActive)

isActive && showUser()

// toggole bulien,chang value isActive
isActive !== isActive
