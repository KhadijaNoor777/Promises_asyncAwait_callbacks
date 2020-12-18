///PROMISE

///Example 1
var promise = new Promise(function(resolve, reject){
    resolve(2);
})
promise.then(first).then(second).then(third).then(function(response){
    console.log(response);
})


function first(value){
    console.log(value+2);
    return value+2;
}

function second(value){
    console.log(value+2);
    return value+2;
}

function third(value){
    //console.log(value+2);
    return value+2;
}

///Example 2

function cal(a, b, c){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(a<0 || b<0 || c<0)
                return reject("No negative numbers allowed!");
            resolve(a+b+c);
        }, 1000)
    })
}

cal(3,3,3).then(function(add){
    console.log(add);
    return cal(add, add, add);
}).then(function(response){
    console.log(response);
}).catch(function(e){
    console.log(e);
})


///Example 3, same as 2 but using arrow functions

const calculate = (a, b, c) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0 || c<0)
                return reject("No negative numbers allowed!");
            resolve(a+b+c);
        }, 3000)
    })
}

calculate(1,2,3).then((addition) => {
    console.log(addition);
    return calculate(addition, addition, addition);
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})