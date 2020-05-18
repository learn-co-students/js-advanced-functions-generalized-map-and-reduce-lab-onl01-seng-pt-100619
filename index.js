// Add your functions here
function map(arr, func) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        newArray.push(func(arr[i]))
    }
    return newArray
}

function reduce(arr, func, i) {
    let value = (!!i) ? i : arr[0]
    let start = (!!i) ? 0 : 1   
    for(; start < arr.length; start++) {
         value = func(arr[start], value)
    }
    return value
}