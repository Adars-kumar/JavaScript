
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num); 
// }

// const greetings ="Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// ________ Maps___________
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United State of America")
map.set('FR', "France")

// for (const key in map) {
//    console.log(key); 
// }

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObj = {
    game: "NFS",
    game2: 'Spiderman'
}
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
    
// }


const myObject = {
    js: 'javascrpt',
    cpp: "C++",
    rb: 'ruby',
    swift: 'Swift'
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);   
// }


const programming = ['js', 'rb', 'py', 'java', 'cpp']
// for (const key in programming) {
//     console.log(programming[key]);
    
// }


