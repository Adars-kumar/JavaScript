const mHeros = ['Thor','Spidy', 'Ironman']
const dHeros = ['Superman','Flash', 'batman']

// mHeros.push(dHeros)
// console.log(mHeros);

// const allHeros = mHeros.concat(dHeros)
// console.log(allHeros);

const allnewHeros = [...mHeros, ...dHeros]
// console.log(allnewHeros)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArr.flat(Infinity)
// console.log(realAnotherArray);


console.log(Array.isArray("Human"))
console.log(Array.from("Human"))
console.log(Array.from({name : "Human"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
