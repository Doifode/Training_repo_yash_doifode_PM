"use strict";
/*
------------------------------PROTECTED ACCESS MODIFIER---------------------------------
class Student{
    protected age = 20;
    name = 'alex';
    protected getName(){
        return this.name
    }
 }
 class SubStudent  extends Student{
    public getStudent(){
        console.log( this.age)
    }
 }
 
 let s = new SubStudent()
 console.log(s.getStudent())
 class D{
    constructor(){
    }
 }
 ---------------------------------ADVANCE CONCEPETS------------------------------
 type Employee = {
    name: string,
    prevelige: string,
 }
 type Student = {
    name: string,
    age: number,
    education: any
 }
 let e1: Employee
 e1 = {
    name: 'yash',
    prevelige: 'server-side'
 }
 let s1: Student
 s1 = {
    name: 'yash',
    age: 22,
    education: 'bca'
 }
 type unknowns = Employee | Student
 
 function printStudentInfo(data: unknowns) {
    if ('name' in data) {
       console.log(data.name)
    }
    if ('age' in data) {
       console.log(data.age);
    }
    if ('education' in data) {
       console.log(data.education);
    }
    if ('prevelige' in data) {
       console.log(data.prevelige);
    }
 }
 printStudentInfo(s1)
 printStudentInfo(e1)
 
 class Car {
    drive(name: string) {
       console.log(name + ' Driving ....');
    }
 }
 class Truck {
    Loading(name: number) {
       console.log('Loaded ....' + name + "Kg");
    }
 }
 type methods = Car | Truck
 
 function printFunctioinality(methodname: methods) {
    if ('Loading' in methodname) {
       methodname.Loading(154000)
    }
    if ('drive' in methodname) {
       methodname.drive('yash')
    }
 }
 const c = new Car()
 const t = new Truck()
 printFunctioinality(c)
 printFunctioinality(t)

 
  interface Horse {
    type:'bird'
 runningSpeed :number
  }
  interface Bird{
    type:'horse'
    flyingSpeed :number
  }
  type AnimalSpeed = Horse | Bird
  const PrintSpeed=(speed :AnimalSpeed, speedkmh:number)=>{
    if( speed.type ==='bird'){
       console.log("Horse running speed is :"+speedkmh )
    }
    if(speed.type ==='horse' ){
       console.log("Bird flying speed is :"+speedkmh )
    }
 }
 PrintSpeed({type:'bird',runningSpeed:200},200)
    const para= document.getElementById('para') ! as HTMLInputElement
    console.log( "hi");
    para.value ="yash doifode"
  type Student =[{
    name:string,
    id:number
  }]
  type flag =  Student[number]
  let z: flag
  z={
    id:1,
    name:"yash"
  }
  console.log(typeof(z.id))
----------------------------------Function Overloading -----------------------------
Function overloadig = Function overloading is the mechanism or new feature in which we can create multiple functions and methods but the parameter and return type will be different in each case
we can  call the function or method depends on the parameter type and number of parameter  and  their types



type combined  = string |number
type numeric = number |combined

 function Add (a:string,b:string,c:string):string
 function Add (a:string, b:number):string
function Add (a:number, b:number):number
function Add(a:combined , b:combined){
   if(typeof a ==='string' || typeof b === 'string'){
      return a.toString() + b.toString()
      
   }
   return a + b
}
let  result=Add('yash',"vinod",'doifode')
result=Add('yash',2304)
console.log(result)

---------------------------------OPTIONAL CHAINING------------------------------
optional chainin is the process in which it  stops the compilation if the variable  or  any properties getting the null or  undefined  value from the external source  or api

To deal with this in typescript there is nullinsh coalsing check we use ?? simply adding  question marks check the variable is getting the nullish value or undefined value

?? this ensures the value is null/undefined if it is then it will print the default value we have provide there

const objectExample={
      name:'yash',
      age:22,
      mob:8080494027,
      address:{
         state:'maharashtra',
         dist:'kolhapur',
         pin:416112
      }
}
console.log(objectExample.address.dist ?? "Default")
 */ 
