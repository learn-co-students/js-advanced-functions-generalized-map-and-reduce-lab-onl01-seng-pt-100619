

// function map(arrayList, callbackFunction){
//     result =  []  
//     for (let i = 0; i < arrayList.length; i++) {
//       let el = arrayList[i]
//       result.push(callbackFunction(el))
//     }
//     return result
//   };

function map(src, cb) {
    let r = []
  
    for (let i = 0; i < src.length; i++) {
      let theElement = src[i]
      r.push(cb(theElement))
    }
    return r;
  }

//   function reduce(arrayList, callbackFunction, start = 0){
//     result = start
//     for (let i = 0; i < arrayList.length; i++) {
//       let el = arrayList[i]
//       result = callbackFunction(el, result)
//     }
//     return result
//   };

  function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
    return r;
  }
