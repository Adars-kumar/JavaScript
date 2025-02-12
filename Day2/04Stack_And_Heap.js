// stactk (Primitive)  , Heap (Non-Primitive)

let myYoutubeName = "hc.com"

let anothername = myYoutubeName
anothername = "chaiaurJs"

console.log(myYoutubeName)
console.log(anothername)


let oneUser = {
    email : "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = oneUser

userTwo.email = "random@gmail.com"

console.log(oneUser.email)
console.log(userTwo.email)