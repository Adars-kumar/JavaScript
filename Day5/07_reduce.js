const myNums = [1,2,3,4]

// _____________By Regular Function_____________
// const myTotal = myNums.reduce( function(acc,currVal){
//     console.log(`acc: ${acc} and currVal ${currVal}`);
    
//     return acc + currVal
// },3)


// _____________By Arrow Function_____________
const myTotal = myNums.reduce( (acc, curr) => acc + curr ,0)

// console.log(myTotal);


const shoppingCart =[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 2999
    },
    {
        itemName: "Mobile dev Course",
        price: 2999
    },
    {
        itemName: "Data science Course",
        price: 12999
    },
];

const priceToPay =  shoppingCart.reduce((acc,item) => acc + item.price ,0)
console.log(priceToPay);
