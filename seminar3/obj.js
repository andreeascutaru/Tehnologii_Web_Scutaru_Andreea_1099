const obj ={
    fisrstName: 'John',
    lastName: 'Doe',
    age: 30
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const { lastName, fisrstName } = obj;
const lastName2=obj.lastName;
const fisrstName2 = obj.fisrstName;

console.log(lastName);