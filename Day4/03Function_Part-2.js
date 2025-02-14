//  This (...) symbol is rest and spread operator both. It's use of depend on situtaion

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));
const user = {
    username: "Human",
    price: 109
}
function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`); 
}
handleObject(user)



function handleObjectTwo(anyObject){
    console.log(`Heroname is ${anyObject.username} and role is ${anyObject.role}`);
}
handleObjectTwo({
    username: "Spidy",
    role: "codweb"
}) 


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,400,500,1000]));
