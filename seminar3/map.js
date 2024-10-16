const arr = [1,2,3,4,5];

const forEachArr = arr.forEach(el =>{
    return el*10
})

const mapArr = arr.map(el => {
    //const result = await fetch('');
    return el*10
})

console.log(forEachArr);
console.log(mapArr);

