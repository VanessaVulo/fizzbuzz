console.log("Hello World")

let number1 = 20
// you can change ket variable further line

const number2 = 30 
// const cannot be changed

console.log(number1)

number1 = 50

console.log(number1)

//you have to assign a key word for variable that is used for first time for reference

let sum = number1 + number2 

let sub = number2 - number1

let mul = number1 * number2

let div = number2 / number1
//all these let variables are changable anytime

let remainder = number2 % number1

console.log(sum, sub, mul, div, remainder)

//next are conditional operators to compare values

let price = 100

let orderedBefore = false

let shouldGetDiscount = price > 50 && !orderedBefore 
// this sign || means bascially "or", whereas if you used && it means "and".



if(shouldGetDiscount == true)
{
    console.log("You get a discount")
}

let message1 = "You got a discount of : "
let discount = 10
console.log (message1 + 10 +"%")

//template syntax
//back ticks
// $(variable)
console.log(`You got a discount of : ${discount} %`)

//primitive data types like string, number, boolean

//non-primitive data types like array or object 


let item = {
    name: "Laptop",
    price: "10000",
    stock: 10,
    specifications:{
        ram: "32GB",
        storage: "1TB"
    },
    available_colors: ['black', 'white', 'gold']
}

// accessing object properties
console.log(item.price)

//arrays list always start from 0
const color = ['black', 'white', 'gold']

console.log(color[2])

console.log("length of array", color.length)

