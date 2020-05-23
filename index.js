// Add your functions here


function map(array, logicNegatize){
  let negative =[]
  for(let a of array){
    negative.push(logicNegatize(a))
  }
    return negative;
  // the only line that changes is this so we can make it a function/variable
}

//they need to share the argument which in this case would be array

// let logicNegatize = function(array){return array * -1}

function reduce(array, functionReduce, startingPoint){
  let result = (!!startingPoint) ? startingPoint : array[0]
  let index = (!!startingPoint) ? 0 : 1
  for(; index < array.length; index++){
    result = functionReduce(array[index], result)
  }
  return result;
}



// function map (array, functionName){
//     functionName()
// }
  
//   let sayHola = function(name="") {
//     console.log(`Hola${name}`)
//   }
  
//   functionUsingCallback(sayHello, sayHola, function(name="") {
//     console.log(`Ni Hao${name}`)
//   }, " Gary")
  
//   function functionUsingCallback(en, es, zh, name){
//     en(name)
//     es(name)
//     zh(name)
//   }
  
//   /* Prints */
//   Hello Gary
//   Hola Gary
//   Ni Hao Gary



// function mapToNegativize(sourceArray){
//     let newArray = []
//     for(let i= 0; i < sourceArray.length; i++){
//         newArray.push(-sourceArray[i])
//     }
//     return newArray;
// }

// function mapToNoChange(sourceArray){
//     let newArray = []
//     for(let i= 0; i < sourceArray.length; i++){
//         newArray.push(sourceArray[i])
//     }
//     return newArray;
// }

// function mapToDouble(sourceArray){
//     let newArray = []
//     for(let i= 0; i < sourceArray.length; i++){
//         newArray.push(sourceArray[i]*2)
//     }
//     return newArray;
// }

// function mapToSquare(sourceArray){
//     let newArray = []
//     for(let i= 0; i < sourceArray.length; i++){
//         newArray.push(sourceArray[i] ** 2)
//     }
//     return newArray;
// }

// function reduceToTotal(sourceArray, startingPoint = 0){
//     let value = startingPoint
//     for(let i= 0; i < sourceArray.length; i++){
//         value += sourceArray[i] // plus/equal allows the value variable to increase with each loop
//     }
//     return value;
// }

// function reduceToAllTrue(sourceArray){
//     let result;  // if i set the result of the review of the elements to a variable then i can return the analysis of all elements at the end as this variable
//     for(let i= 0; i < sourceArray.length; i++){
//         if (!sourceArray[i]){
//         result =  false; // if i return true right away the review of the elements will stop
//         } else if (sourceArray[i]){
//         result = true;
//         }
//     }
//     return result;
    
// }

// function reduceToAnyTrue(sourceArray){
//     let result;
//     for(let i= 0; i < sourceArray.length; i++){
//         if (sourceArray[i]){
//         result = true; 
//         } else if (!sourceArray[i]){
//         result = false;
//         }
//     }
//     return result;
// }