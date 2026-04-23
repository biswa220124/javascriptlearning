function printHello(){
console.log(`Hello World`);
}

printHello();
function userLoggedIn(username){
    if(username===undefined){
        return
    }
    console.log(`${username} just Logged In`);
    
        
}
userLoggedIn("biswa")