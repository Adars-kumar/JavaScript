// IIFE => Immediately Invoked Function Expression
// To avoid global scope pollution problem use IIFE
// IIFE don't know where to stop execiton . To avoid this use statement terminator at the end.
// To create Two IIFE in single file use staemnt terminator (;) at first IIFE end then create another IIFE

// _________Regular Function______
// function chai(){
//     console.log(`Db connected`);
    
// }
// chai()


// _________ IIFE __________
(function chai(){
    //This is called Named IIFE
    console.log(`Db connected`);
    
})();

((name) => {
    // This is Unnamed IIFE
    console.log(`DB CONNECTED To ${name}`);
    
})("Spidy")


