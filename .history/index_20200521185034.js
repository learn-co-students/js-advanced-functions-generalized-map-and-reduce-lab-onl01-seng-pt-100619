// Add your functions here
function map(sourceArray){
    let negNum = []
    for (let i = 0; i < sourceArray.length; i++) {
        negNum.push(-1 * map[i])
    }
    return map
}