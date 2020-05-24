// Add your functions here
function map(sourceArray, callbackFunction){
  const newArray = []
  for (let i = 0; i < sourceArray.length; i++){
      newArray.push(callbackFunction(sourceArray[i]))
  }
  return newArray
}

function reduce(sourceArray, callbackFunction, startingPoint){
  let total
  let i = 0
  if (startingPoint){
    total = startingPoint
  } else {
    total = sourceArray[0]
    i++
  }
  for (i; i < sourceArray.length; i++){
    total = callbackFunction(sourceArray[i], total)
  }
  return total
}
