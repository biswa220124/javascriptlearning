// let myObj = new Object();
// myObj.name = "Biswa";
// console.log(myObj);

const myObj = {
    1:"a" ,2:"b"
}
const myObj1 = {
    1:"a", 2:"b"
}
const myObj3 = console.log(Object.assign({},myObj,myObj1))

const mergeObj = {...myObj,...myObj1,...myObj3}
console.log(mergeObj);

//------------------------

const myDetails = {
    name: "Biswabhushan Swain",
    Aim: "to get a job",
    programInstructor: "Hitesh Choudhary"
}
const{programInstructor:PI} = myDetails;
console.log(PI);
{
    
}

