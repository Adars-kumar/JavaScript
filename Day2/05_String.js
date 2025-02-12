const courseName = "javascript"
const cId = 102;

console.log(`Hello this is ${courseName} course and ID is ${cId}`)

let gamename = new String('javascript')
console.log(gamename)

console.log(gamename.__proto__)
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString = gamename.substring(-8,4);
console.log(newString)
const anotherString = gamename.slice(-8,4);
console.log(anotherString)

const trimEx = "   python   "
console.log(trimEx.trim());

const url = "https://js%20blog"
console.log(url.replace('%20', '-'));

console.log(url.includes('js'))

const value = "React-vite"
console.log(value.split('-'))