const product = [
    {name:'laptop', id:7, priace:3000, barand:'walton', color:'silver'},
    {name:'fan',id:7, priace:30500, barand:'samsung', color:'balck'},
    {name:'caemra',id:5, priace:35000, barand:'lanovo', color:'silver'},
    {name:'mobile',id:4, priace:3600, barand:'iphone', color:'red'}
]

// map funton

// const mapFun = product.map(mappro => mappro.color)
// console.log(mapFun)

// const mapFun1 = product.map(mapname => mapname.name)
// console.log(mapFun1) 


// // forEach funtion
// product.forEach(product => console.log(product))
// product.forEach(forPro => console.log(forPro.name))

// // forEach many line
// product.forEach(product => {
//     console.log(product.priace)
// })


// // fileter 
// const filterarry = product.filter(profilter => profilter.priace > 3500)
// console.log(filterarry)

// inclute n in anny name for a filter
// const lettr = product.filter(product => product.name.includes('n')) 
// console.log(lettr)

// const idproduct = product.filter(p => p.id > 5)
// console.log(idproduct)


// find funtin
// const findletter= product.find(product => product.priace > 3500)
// console.log(findletter)


// const findPorduct= product.find(product => product.color.includes('si'))
// console.log(findPorduct)

const idfind = product.find(p => p.id > 5)
console.log(idfind)
