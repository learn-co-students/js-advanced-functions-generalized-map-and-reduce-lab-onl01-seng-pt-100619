// Add your functions here
function map(sourceArray, cb){
    let negNum = []
    for (let i = 0; i < sourceArray.length; i++) {
        let theResult = sourceArray[i]
        negNum.push(cb(theResult))
    }
    return negNum
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }