//  Clousre => when a child function remembers and uses its parent’s variables even after the parent has finished running. This helps in keeping data private and managing state.

function one(){
    const username = "Human"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if (true) {
    const username = "Someone"
    if (username === "Someone") {
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website);   
}
// console.log(username);

// ___________Interesting_________________

console.log(addone(5));
function addone(num){
    return num + 1
}

// If we accessing variable before the function declaration produce error and that is also known as function hoisting
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(3))
