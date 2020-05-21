// Add your functions here
function map(sourceArray, cb){
    let negNum = []
    for (let i = 0; i < sourceArray.length; i++) {
        let theResult = sourceArray[i]
        negNum.push(cb(theResult))
    }
    return negNum
}

function reduce(sourceArray, cb, starting){
    let i = (!!starting) ? starting : src[0]
    let r = (!!starting) ? 0 : 1
    for (; i < sourceArray.length; i++) {
        i = cb(sourceArray[i], r)
        negNum.push(cb(theResult))    
}
return i
}