const myObj={
    name:"Biswa",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.name},welcome`);
        
    }
    
}
//console.log(myObj);
//console.log(myObj.name);

function one(){
    username: "Biswa";
    price: 999;

    //console.log(this);
    
}
one()
const newFunc= ()=>{
    username:"Biswa";
    price:999;
    console.log(this.username);
    
}

const addFun = (val1,val2) =>{
    return val1+val2;
}
//console.log(addFun(5,6));

const addTwo = (num1,num2) =>(num1+num2);
console.log(addTwo(11,1));

