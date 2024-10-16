const arr = [1,2,3,4,5];

const elIndex = arr.indexOf(5); //daca nu gaseste returneaza -1; incepe de la 0
const elIndex2 = arr.find(el => el === 6); //daca nu gaseste returneaza undefined, returneaza elementul nu pozitia!!!

console.log(elIndex);
console.log(elIndex2);