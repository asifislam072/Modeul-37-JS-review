const student = {
    name:'sakib',
    age:34,
    movie:['king khan','dhakar masten']
}
const sjson = JSON.stringify(student)
// console.log(sjson)


// feach rouls
// fetch('url')
// .then(res => res.JSON())
// .then(data => console.log(data))

// keys value
// console.log(Object.keys(student))
// console.log(Object.values(student))

const product = [
    {name:'laptop', id:7, priace:3000, barand:'walton', color:'silver'},
    {name:'fan',id:7, priace:30500, barand:'samsung', color:'balck'},
    {name:'caemra',id:5, priace:35000, barand:'lanovo', color:'silver'},
    {name:'mobile',id:4, priace:3600, barand:'iphone', color:'red'}
]

const newProduct = {neme:'webcame', pric:700,color:'yellow'};

// copy product array and then add newProduct
const newProducts=[...product, newProduct]
// console.log(newProducts)


// remove object 
const remove = product.filter(p => p.name !== 'fan')
console.log(remove)