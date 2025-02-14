// "this" keyword produce currnet context
// this keyword do not worked in both Regular and Arrow function

const user = {
    username: "Human",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //Id we declare outside the node produce empty {}

// Here "this" is not worked in function but its worked in Object
// function chai(){
//     let username = "human"
//     console.log(this.username);
// }
// chai()


const chai = () =>{
    let username = "Human"
    console.log(this.username);  
}
// chai()


// __________Arrow Function__________
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))


// _____ Implicit Arrow function______
// const addTwo = (num1, num2) =>  (num1 + num2)
// const addTwo = (num1, num2) =>  num1 + num2

// _____ Return Object impictly in Arrow fn____
const addTwo = (num1 , num2) => ({username: "Human"})
console.log(addTwo(3,4))