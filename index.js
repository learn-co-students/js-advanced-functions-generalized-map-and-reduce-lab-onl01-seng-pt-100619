function map(array, callback){
    let newArray = []

    for(let i = 0; i < array.length; i++){
        let newElement = array[i]
        newArray.push(callback(newElement))
    }
    return newArray;
}


function reduce(array,callback, initialValue){
    // if initial value exists: yes or no?
    let total = (!!initialValue) ? initialValue : array[0]
    // if initial value exist, index should be 0 or index should start from the first element. That's why we don't need to assign i = 0 in our for loop
    let index = (!!initialValue) ? 0 : 1;
    
    for(index; index < array.length; index++){
       total = callback(array[index],total);
    }
    
    return total;

}
