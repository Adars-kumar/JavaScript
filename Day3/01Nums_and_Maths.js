const score = 400;
console.log(score)

// Note: Number has comparatively less prototype properties (methods) than String

const balance  = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1123.894;
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('eb-IN'))


// -----------------   Mahts   -------------------
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(3.4))
console.log(Math.ceil(3.4))
console.log(Math.floor(3.4))
console.log(Math.sqrt(3))
console.log(Math.min(3,4,1,6))
console.log(Math.max(3,5,8,1,0))
console.log(Math.random())
console.log((Math.random() *10) + 1)
console.log(Math.floor(Math.random() *10) + 1)

// ---- Trick to randomize value between range ----
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1)) + min)  


 



