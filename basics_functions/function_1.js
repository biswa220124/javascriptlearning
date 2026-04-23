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

function takeArgs(num1,num2,...num3){
    return num1,num2,num3
}
console.log(takeArgs(2,3,4,5,6,7));

const myArray = [200,400,600];
function getSecondElement(anyArray){
    console.log(anyArray[1]);
    
}
getSecondElement(myArray);