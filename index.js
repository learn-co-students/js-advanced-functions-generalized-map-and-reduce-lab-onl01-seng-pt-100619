// Add your functions here
function map(sourceArray, callbackFunction){
  const newArray = []
  for (let i = 0; i < sourceArray.length; i++){
      newArray.push(callbackFunction(source[i]))
  }
  return newArray
}
