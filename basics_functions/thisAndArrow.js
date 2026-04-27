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