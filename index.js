// Add your functions here
function map(array, fn) {
    let newArray = [];
    array.forEach(index => {
        newArray.push(fn(index))
    });
    return newArray;
}

function reduce(array, fn, start) {
let total;
let index;

if(!!start){
    total = start;
    index = 0;
} else {
    total = fn(array[0], array[1]);
    index = 2;
}
for (index; index< array.length; index++){
    total = fn(total, array[index])
}
return total;
}





