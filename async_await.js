///Async await

///Example 1

function cal(a, b, c){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(a<0 || b<0 || c<0)
                return reject("No negative numbers allowed!");
            resolve(a+b+c);
        }, 1000)
    })
}

async function sum(){
    const sum1 = await cal(3,3,3);
    console.log(sum1);
    const sum2 = await cal(sum1,sum1,sum1);
    return sum2;
}

sum().then(function(value){
    console.log(value);
}).catch(function(e){
    console.log(e);
})


///Example 2, same as 1 but using arrow function

const calculate = (a, b, c) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0 || c<0)
                return reject("No negative numbers allowed!");
            resolve(a+b+c);
        }, 3000)
    })
}


const add = async () => {
    const sum1 = await calculate(1,2,3);
    console.log(sum1);
    const sum2 = await calculate(sum1,sum1,sum1);
    return sum2;
}

add().then((value) => console.log(value)).catch((e)=> console.log(e))


