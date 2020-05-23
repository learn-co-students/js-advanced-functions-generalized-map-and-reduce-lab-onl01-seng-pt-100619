function map(sourceArray, callbackFn) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(callbackFn(sourceArray[i]))
    }
    return newArray
}

function reduce(sourceArray, callbackFn) {
    let total = 0
    for (let i = 0; i < sourceArray.length; i++) {
        total = callbackFn(sourceArray[i], total)
    }
    return total
}

function reduce(sourceArray, callbackFn, startPoint) {
    let total 
    let i = 0

    if (startPoint) {
        total = startPoint
    } else {
        total = sourceArray[0]
        i++
    }
    
    for (i; i < sourceArray.length; i++) {
        total = callbackFn(sourceArray[i], total)
    }
    return total
}