// array destructuring
const number = [2,4]
// const x = number[0]
// const y = number[1]
// console.log(x,y)

const [x, y] =number
const count = [x,y]
console.log(count)


// object desturturing
const employee = {
    ide:'vs code',
    design:'programer',
    machin:'mac'
    // info:{
    //     hight:77,
    //     wight:45,
       
    //     watch:{
    //        color:'balck',
    //        price:3400
    //     }
    // }
}

// *****************************************************

// const {ide,machin} = employee
// const {hight,wight}=employee.info
// const {color,price} = employee?.info?.watch?

const left = Object.keys(employee)
const value = Object.value(employee)
console.log(left)
console.log(value)