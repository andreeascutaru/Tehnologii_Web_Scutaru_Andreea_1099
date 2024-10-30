const promise = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        const status = true;

        if(status){
            resolve('Operation succeeded')
        } else{
            reject(new Error('Error message'));
        }
    },2000)
})

//const promisAnswer = await promise
//console.log(promisAnswer);

//promise.then((message)=>console.log(message)).catch((error)=>console.log(error))

async function f(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(() =>resolve("done!"),1000)
    });

    let result = await promise;//wait until the promise resolves
    console.log(result);//"done!"
    promise.then((message)=>console.log(message)).catch((error)=>console.log(error))
}

f();