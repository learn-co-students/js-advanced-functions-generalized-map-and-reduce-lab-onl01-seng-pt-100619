// Add your functions here
function map(sourceArray, cbFxn){
    let newArray= []
    for(let i = 0; i<sourceArray.length; i++){
        newArray.push(cbFxn(sourceArray[i]))
    }
    return newArray
}

function reduce(sourceArray, cbFxn, startingPoint){
    let runningTotal
    let i
    if(startingPoint){
        runningTotal = startingPoint
        i = 0
    } else {
        runningTotal = sourceArray[0]
        i = 1
    }
    
    for( i; i < sourceArray.length; i++){
        runningTotal = cbFxn(sourceArray[i], runningTotal)
    }
    return runningTotal
}