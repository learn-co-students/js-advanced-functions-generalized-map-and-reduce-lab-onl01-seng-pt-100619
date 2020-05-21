// Add your functions here
function map(sourceArray, cb){
    let negNum = []
    for (let i = 0; i < sourceArray.length; i++) {
        let theResult = sourceArray[i]
        negNum.push(cb(theResult))
    }
    return negNum
}