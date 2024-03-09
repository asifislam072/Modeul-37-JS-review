// kon for of loop ta kon somoy used korbo
const number = [23, 34, 45, 5, 76, 4];
// for(let num of number){
//     console.log(num)
// }

for (let i = 0; i < number.length; i++) {
  const num = number[i];
  console.log(num);
}

function multiplay (a,b){
  return a*b
}
console.log(multiplay(34,4))


// object
const output = {
  name:'asif',
  profation:{
    student:'past',
    id:'34',
  },
  class:34,
}

for (let out in output){
  const key = out;
  //   const valu = output[out] ai line ta buji nai
  const valu = output[out]
  console.log(key,valu)
}


console.log(output)
const pro = output.profation
const string= JSON.stringify(pro)
console.log(string)
const parse = JSON.parse(string)
console.log(parse)
