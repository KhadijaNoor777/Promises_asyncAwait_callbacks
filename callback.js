function first(value, callback){
    callback(value+2, false);
}

function second(value, callback){
    callback(value+2, false);
}

function third(value, callback){
    callback(value+2, false);
}


first(2, function(firstResult, err){
    if(!err){
        console.log(firstResult);
        second(firstResult, function(secondResult, err){
            if(!err){
                console.log(secondResult);
                third(secondResult, function(thirdResult, err){
                    if(!err){
                        console.log(thirdResult);
                    }
                })
            }
        })
    }
})
