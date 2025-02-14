// Scope{} works different in browser console as compared to node 

var c = 300
let a = 300

// {} -> scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // c = 30
    console.log("Inner a: ", a);

}



console.log("Outer a: ", a);
// console.log(b);
console.log(c);
