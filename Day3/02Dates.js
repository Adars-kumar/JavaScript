
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())

console.log(typeof myDate)

let myCreatedDate = new Date(2025, 2, 13)
console.log(myCreatedDate.toString())
let myCreatedDate1 = new Date(2025, 2, 13,5,3)
console.log(myCreatedDate1.toLocaleString())
let myCreatedDate2 = new Date("2025-02-13")
console.log(myCreatedDate2.toLocaleString())
console.log(myCreatedDate2.getTime())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "long"
})