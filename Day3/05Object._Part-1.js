// Singleton => A Singleton is a design pattern that ensures a class has only one instance and provides a global point of access to that instance. It is only produced through **CONSTRUCOR**
// Object.create


// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Human",
    "full name": "Harish bhai",
    [mySym]: "myKey1",
    age: 18,
    location: "Bihar",
    email: "123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"])
console.log(JsUser[mySym]);

JsUser.email="abc@gmail.com"
// Object.freeze(JsUser)
JsUser.email="de@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greetingTwo())





// _______________ NOTE  ___________________
// 1. To use symbol as Symbol it will be always written in [] sqaure bracket, otherwise it return string as data type