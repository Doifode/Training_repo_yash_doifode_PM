
// --------------------------------UNION DATAT TYPE ---------------------------
// union data types allow us to give more than one data type to the one variable 
// like in Add() function  our parameter can get number,and string data type and 
// depends on  that  scenerio we can create our logic
// ------------------------------------------------------------------------------
// const Add = (num1: string | number, num2: string | number) => {
//     let result;
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         result = num1 + num2
//     }
//     else {
//         result = num1.toString() + num2.toString()
//     }
//     return result
// }
// console.log( Add(23, 43), Add("parallel", "minds"))


// ---------------------------------------LITERAL TYPES------------------------------------------------
// Literal - literal are the hard-coded value assigned to variable that values are more than one we can deside which value we gonn use
// literals  are used to store multi values in a variable and depend on that value we can creat our logic 
// -----------------------------------------------------------------------------------------------------
// function Calculation(a: number, b: number, cal: 'sub' | 'mul' | 'div' | 'add') {
//     let result;
//     switch (cal) {
//         case 'add': {
//             result = a + b 
//             break;
//         }
//         case 'sub':{
//             result = a-b;
//             break
//         }
//         case 'div':{
//             result = a/b;
//             break
//         }
//         case 'mul':{
//             result= a*b
//             break ;
//         }
//     }
//     return result;

// }
// const n= Calculation(85,35,'sub')
// document.write(n)


// ---------------------------------------------ALIASES TYPES-------------------------------------
// Aliases are the custome types that we can meake using  the  type keyword from typescript 
// we can create a variable which we store the data types that we wann to get from the user that can  be single and multiple like union as well 
// we can also set the literal value to aliases as well
// ------------------------------------------------------------------------------------------------
// type CustomeDataType = string|number
// function Add(a:CustomeDataType , b :CustomeDataType ){
//     if(typeof(a) ==='number' && typeof(b)==='number'){
//         return a+b
//     }else{
//         return a.toString() + b.toString()
//     }
// }
// console.log(Add(4,5))
// console.log(Add('yash','doifode'))

// --------------------------------------VOID TYPE---------------------------------------
// Void is assigned to the function when the function does not have return  type 
// means the function does not return any type of value  then the function will be VOID type
// -------------------------------------------------------------------------------------------
// let a =():void =>{
//     console.log('hi this is  yash')

// }
//  console.log(typeof(a()))

// function  will be also undefined  when it return undefined value 

// let a =():undefined =>{
//     console.log('hi this is  yash')
//     return;

// }
//  console.log(typeof(a()))

// ----------------------------------FUNCTION AS TYPE -----------------------------------------------------------
// We can assign a function type to the  variable also means the variable must be stored wit function type 
// it can not able to store any other type of value 
// as well we can also able to assign specific type of function with specific type of parameter return type as well  
// means we can difine the structure of the function already and then store the function of that matching type  
// ----------------------------------------------------------------------------------------------------------------

// let combinationFun :Function

// function add (a:number, b:number){

// }
// combinationFun = add 

// ---------------------------------CALL BACK FUNCTION -----------------------------------------
// call back functions are the function in which passed to other function as a parameter 
// the callback function can return  value even it declare to be void type  of function 
// following add() function we declare a function type void but down we pass the function that return value 
// so the call back function can return values even it pre declare void type
// ----------------------------------------------------------------------------------------------- 
// function add(a: number, b: number, c: Function = (params: number): void => {  
//     console.log( params)
// }) {
//     return a + b
// }
// const PrintVal =(num)=>{
//      console.log(num)
//     return num
// }

// let val = PrintVal(56546)
// console.log(add(2,3,val));

// ------------------------------------------------UNKNOWN TYPE ------------------------------------------------------
// unknown data type are used when we dont know the value which is gonn assign to variable  is not declared yet 
// we can  store any other values in the unknown type of variable but we can not  assign the unknown variable to other variable 
// down there data variable is unknown type and  types is string type we cant assign the unknown type variable to the other variable  which type is already declared  
// --------------------------------------------------------------------------------------------------------------------
// let data : unknown;
// let data : any;
// data ='yash'
// data =897;
// data = true
// let types:string  
//   types  =  data

// =-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= NEVER TYPE OF FUNCTION -=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-==-=-=
// The function in which never return value called as never type of function 
// we can explicitly assign the never type of value to the function 
// =-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-==- 
// const ThroughErrorFun =(msg:string) :never =>{
//     throw { message:msg  }
//      while(true){
//         return   
//      }
//     return "hi i am return type "
// }
//   let checknever = ThroughErrorFun("hi i am yashh ") 
//   console.log(checknever)


  


