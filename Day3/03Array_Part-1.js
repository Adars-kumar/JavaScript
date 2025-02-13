
// A shallow copy creates a new object or array, but it only copies references of nested objects instead of copying the actual objects. This means that changes to nested objects in the copy will affect the original object
// A deep copy duplicates all levels of the object/array, meaning changes in the copied object will not affect the original. 

const myArray = [0,1,2,3,4, true, "word"]
console.log(myArray[2])
const heros = ['spidy', 'superman', 'human', 'batty']
const myArr = new Array(0,1,2,3,4,5)

// Array methods
myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()


console.log(myArr.includes(9))
console.log(myArr.indexOf(4))

const newArr = myArr.join()
console.log(myArr)
console.log(typeof newArr)


// slice, splice

console.log("A ",myArr);   // [0,1,2,3,4,5]
const myn1 = myArr.slice(1,3)  // [1,2]
console.log(myn1);

console.log("B ", myArr);  // [0,1,2,3,4,5]
const myn2 = myArr.splice(1,3) // [1,2]
console.log(myn2);

console.log("C ", myArr);  // [0,4,5]



// _------------Note------------
//   1. slice()
//     - Does NOT modify the original array (creates a new array). -- Deep copy
//     - Used to extract a portion of an array.
//     - Returns a new array with the selected elements.
//     - Extracts elements from index start to end - 1 (end is not included).

//   2. splice()
//     - Modifies the original array (mutates it).
//     - Used to add or remove elements from an array.
//     - Returns the removed elements (if any).
//     - Removes deleteCount elements starting from start index.