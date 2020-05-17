// Add your functions here

// map returns an array with all values made negative
// map returns an array with the original values
// map returns an array with the original values multiplied by 2
// map returns an array with the original values squared
     
function map(sourceArray, func) {
    const newArray = [];
    for (const n of sourceArray) {
        newArray.push(func(n));
    }
    return newArray;
};


// reduce returns a running total when not given a starting point      
// reduce returns a running total when given a starting point     
// reduce returns true when all values are true  
// reduce returns false when any value is false    
// reduce returns true when a true value is present    
// reduce returns false when no true value is present

function reduce(sourceArray, func, startingPoint= 0) {
    let memo, sp;
    if (startingPoint) {
      memo = startingPoint;
      sp = 0;
    } else {
      memo = sourceArray[0];
      sp = 1;
    }
    for (let i = sp; i < sourceArray.length; i++) {
      memo = func(memo, sourceArray[i]);
    }
    return memo;
};