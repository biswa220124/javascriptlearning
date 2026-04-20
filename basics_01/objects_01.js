const mySym = Symbol("Airbus");
const jsUSer = {
    name: "Biswabhushan Swain",
    age: 20,
    [mySym]: "Boeing",
    email: "Biswabhusan@tcs.com"

}
console.log(jsUSer.age);
console.log(jsUSer[mySym]);

//Object.freeze(jsUSer);
jsUSer.greetings = new function(){
    console.log(`hello ${this.name}`);
    
}
console.log(jsUSer.greetings);
