const arr = [1,2,3,4,5];

const sum = arr.reduce((acc, el) => {
    return acc+el // acc e cel in care se tine suma 
}, 0);

console.log(sum);