//on the basis of how data is feeded and accesed
// from the the memmory the data types are divided in two types 
// 1) primitive 
       // primitive types are:-
           // String , Number, Boolean , Null, Undefined , Symbol ,BigInt
// 2) non - primitive or reference type 
       // non primitive types :-
           // Array ,Objects , Function

const score = 100
const scorevalur = 100.3


const isloggedIn = false 
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('1232')

console.log(id == anotherId);

const bigNumber = 324453434634634234323123124124214n
console.log(typeof(bigNumber))

// Array, Objects, Functions
 const heros = ["geru","nfrkjn","vdvd"]
let myObj = 
{
    name: "abhi!",
    age: 21,
}
console.log(heros);
console.log(myObj);

const myFunction = function()
{
    console.log("hello world")
}




//+++++++++++++++++++++++++++++
//stack(primitive) ,Heap(non-primitive)

let myYoutubename = "abhidotcom"

let anothername = myYoutubename
console.log(anothername);