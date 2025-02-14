// Basic of Function
function sayMyName(){
    console.log("H");
    console.log("u");
    console.log("m");
    console.log("a");
    console.log("n");
    
}
// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2;
}
const res = addTwoNumbers(3,8)
// console.log("result = " + res);


function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
