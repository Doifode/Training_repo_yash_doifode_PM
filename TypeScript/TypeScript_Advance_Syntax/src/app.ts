// console.log('Advance Typescript & Javascript Syntaxes ');
/*
-----------------------CONST--------------------------
const userName = "Yash";
we cant reassign the value to const variable  
userName ="Om"
-----------------------LET-----------------------------
let has a function scope variable if we declare let insidet the function
 then it can be accesable in functioin only we cant use it outside the function  

function Add(a:number , b:number){
    let result =a+b;
    return result
}
console.log(result) This is not  possible coz the let has function scope here
Also we can reassign the let variable value
ex - 
let a = 4575;
a =10000;
we can redeclare value but the value must be same data type 

-------------------ARROW FUNCTION-------------------------
Arrow function is nothing but the another way of writiing function  
SIMPLE FUNCTIOM -
function add(a : number , b:number){
    return a+b
}
we can also write it in arrow  function like
const add =(a:number,b:number)=>{
    return a+b;
}
const add =(a:number,b:numbmer)=> a+b;

const add =(a:number,b:number)=> a+b;
console.log(add(4,5))
---------------------DEFAULT PARAMETERS---------------------
We can assign default parameter to the function 
the default parameter should be last to in the function parameter list 
default argument have to be last coz while compilation they dont get skiped 
ex -
const add =(a:number,b:number=10)=> a+b
console.log(add(45))
const obje = [ { name:'yash', age:22, contact:8080494027 }]
console.log(...obje)
// const arr =['yash','om','ruturaj','rohit']
// console.log(...arr)


*/
// let a = 3-87+1000+4+1
// console.log(eval(a.toString()))
// const  add =(...numbers:number[])=>{
//    return  numbers.reduce((x,y,z)=>{
//         return x+y*z
//     },0)
 

// }
// console.log(add(4,5,8,4,7,4,5,89,8))

// const obje = {
//     role:[ "yash",2304]
// }
// console.log(obje)

// obje.role.push('yash');
// console.log(obje)

// const a = obje.role.find((element  )=>{
//     console.log(element)
    
// })
// console.log(a)

/*
-------------------------DESTRUCTURING-----------------------------------------
Destructuring in js/ts are advance feature that allows us to unpack values from the object and array
in Array we only unpack values sequencly and in object we can unpack value by their proper key name and use them
-------------------------ARRAY DESTRUCTURING--------------------------------------
const arr= [ 45,85,78,79,6,74,5]
const [num1,num2] = arr
console.log(num1, num2)
also we can destructure the elements we want and the remaining into the new variable like
const [num1,num2,...remaining] = arr
this will store the remaining elements in to the third variable  and  create the new array with them  
------------------------OBJECT DESTRUCTURING-------------------------------------
Like that object destructureing also work like that but here we havet to destructure with proper variable name 
we can do likewise with them also only we have to give exact same name  while destructureing  the object keys 

----------------------------DIFFERENCE BETWEEN ARRAY DS AND OBJECT DS-----------------------------------
Main difference is that array destructured  by the sequence and  object can be destructure in any order  coz we ds
object by proper key names ...

const obj ={
    username:"yash",
    age:22,
    education:"BCA",
     languages:"HTML,js,ts,css"
}
const {username ,age , ...remaining} = obj
console.log(username ,age , remaining)


*/

