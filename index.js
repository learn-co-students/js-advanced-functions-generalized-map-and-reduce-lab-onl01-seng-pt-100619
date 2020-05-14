// Add your functions here
function map(array, fn) {
    let newArray = [];
    for(let i=0;i<array.length;i++){
        newArray.push(fn(array[i]))
    }
    return newArray
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }