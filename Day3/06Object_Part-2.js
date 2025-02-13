// const tinderUser1 = new Object() //singleton object

const tinderUser = {}   //Non- singleton object

tinderUser.id ="123ab"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sammy",
            lastName: "Bhuvan"
        }
    }
}

console.log(regularUser.fullName?.userFullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//Object.assign(target, source)
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



