const map = (sourceArray, func) => {
    const newArray = []
    for (const x of sourceArray) {
      newArray.push(func(x))
    }
    return newArray
  }
  
// const reduce = (sourceArray, func, startingPoint) => {
//     let value, valTF
//     if (startingPoint) {
//       value = startingPoint
//       valTF = 0
//     } else {
//       value = sourceArray[0]
//       valTF = 1
//     }
//     for (let i = valTF; i < sourceArray.length; i++) {
//       value = func(value, sourceArray[i])
//     }
//     return value
// };


function reduce(sourceArray, func, startingPoint){
  let total 
  let i = 0

  if (startingPoint) {
    total = startingPoint
  } else {
    total = sourceArray[0]
    i++
  }
  for (i; i < sourceArray.length; i++){
    total = func(sourceArray[i], total)
  }
  return total
}