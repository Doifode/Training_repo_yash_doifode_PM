console.log('Class and Interfaces loading....')

/*

{}-{}-{}-{}-{}-{}-{}-{}-{}-{}-OOPS-{}-{}-{}-{}-{}-{}-{}-{}-{}-{}

--------------------------CLASS AND OBJECTS-------------------
Class - class are blue print for creatinig object we defines methods in classes
 class  defines how the object look like means 
in class we defines the all the methods that require and by c reating the object
we can access that methods 
 
Object - object is the instance of the class means all the methods features that we 
defined in class is accesable through object.
we can create many object and  call methods by them as well 

ex 

class DemoClass{  --class key word are used to declare classes 
-- name of class is have to start in UpperCase letter 


    methods,constructors,properties,variable 
    we can declare in side this block 

}



class School{
    studentName :string ='yash'
    studentClass :string= 'paratrooper'
}

const obj1 =  new School
const obj2 =  new School
console.log(obj1.studentName);
console.log(obj2.studentName='akash');

// here obj1 is the object we created from the class means the copy of the School class 
we can access the properties of the class by this object also pass them 
creating many object of one class is possible and


---------------------CONSTRUCTOR--------------------
constructor is the special function in typescript that are used to initialize the values 
constructor are get exicuted when the object is created 
we dont  need to call them just create object  then it will call automatically 
ex -

class ConstructorClassEX{
    a:string;

    TO CREATE CONSTRUCTOR THEIR IS constructor KEY WORD ALREADY DEFINED IN TS ADN JS ALSO 
    constructor(){
console.log(this.a='constructor get called  ')
    }
}
const a = new ConstructorClassEX 

the typescript compiler create default constructor even we dont define them in typescript when compiling it will automatic generated in js file 

--------------------------METHODS--------------------------------------
methods in ts are come inside the classes of ts 
methods are like a function in classes differnece is that it does not require function keyword to define
we just give the name and  write the code in side the block of {}
like functions we can pass parameter to them 
like function methods are also capable of return values
we can  write the logic inside them

class MethodsExample{

    Add( a:number, b:number ){
        return a+b
    }
}

const a = new MethodsExample
console.log(a.Add(5,5))
 
--------------------------------ACCESS MODIFIERES------------------------------
Access Modifiers are the keyword used to increase security to the class methods,properties  and other  fetures 
By using  mdifieres we can also control visibility of them
There are Three access modifiers in ts 
public,private,protected 

public - public specifiers is default specifier that allows us to call the methods properties outside of class 
private - private specifier allows us to make the method  or property private so no one can acess them outside the class through  object 
protected -protected methods and properties are only acceble in extednded classes and not acceble through the object instance 


class ParallelMinds{
    employee:string[];
  public empname:string;
  protected empEducation:string;
   constructor(){
       this.employee=[]=[]
       this.empname=''
       this.empEducation=''
   }
   feelEmpdetails(name:string,education:string){
       this.employee.push(name,education)
       console.log(this.employee.length)
       console.log(this.employee)
   }
}

const PM = new ParallelMinds
PM.employee[1] ='varad'
PM.feelEmpdetails('yash','bca')
PM.employee[2]='yash'

class A {
    public name: string = 'yash'
}
const obj = new A();
class B {
    printVal() { console.log(obj.name); }
}
class Z {
    constructor() {
        console.log(obj.name);
    }
}
-------------------------SHORT HAND FOR INITIALIZATION ---------------------------
short hand is that we can assign  the variable properties directly in  constructor  instead of creating  and  re decalring 
class Add {
    constructor( public num1 :number , public num2:number){
        console.log(num1+num2)
    }
    sub(){
        console.log(this.num1-this.num2);
    }
}
const a = new Add(5,6)
console.log(a.num1)
console.log(a.num2)

---------------------------------------READONLY---------------------------------------
readonly - readonly is the keyword provided by the ts by using that we can control the that no one can change the value 
in side of it 
class ReadOnly{
    constructor(public readonly name:string){
        this.name="om"
    }
}
const a = new ReadOnly('akash')
console.log(a.name)
--------------------------------------INHERITANCE---------------------------------------
inheritance - inheritance is one of main functionality of  the oops concept it allows us to inherite the data from the  parent class to the child class or it enable to share  data through thr class by simply extending them in each other 
there is key word to inherite the class 
extend 
extend class means the properties and the methods in the class which we extend that can be accesable to extednded calss 
we can use the methods and properties in child class as well 

class Department{
    reports:any =[]=[]
}
class Employee extends Department{
    constructor(name:string ,education:string,dob:number){
        super()
        this.reports.push(name,education,dob)
        console.log(this.reports.length)
        console.log(this.reports)
    }
}
class Sallary extends Department{

    obj ={ }
    constructor (name:string,salary:number){
        super()
        this.obj={
            name,
            salary
        }
        this.reports.push(this.obj)
        console.log(this.reports);
        
    }
}

const Emp = new Employee('yash','bca',12)
const sal = new Sallary('yash',16000)

------------------------------------METHOD OVERRIDING--------------------------------
Method overriding - Method overriding is the process when  we override or use the inherited method and modified them as our necessary with logic 

The method overriding means writing the new definition of the method in the inherited class by keeping the method name, parameters, and return type the same.
 
class Additioin {
    constructor(public num1: number, public num2: number) {
        
    }
    add() {
        console.log(this.num1 + this.num2)
    }
}
class Mul extends Additioin {
    add() {
        console.log(this.num1 * this.num2)
    }
}

const a = new Additioin(5, 5)
a.add()
const b = new Mul(5, 5)
b.add()


----------------------------STATIC-----------------------------
static keyword allows us to access the function  and properties without creating instance of them 
dont need to use new create and  we can access them directly through the class 


class  StaticClass{
   static Name:string ='yash'
     static add(a:number , b:number){
console.log(a+b)
   }
}
 StaticClass.add(87,88)
 console.log(StaticClass.Name.length)
 console.log(StaticClass.Name)



 -------------------------------
 class Person {
     private _age: number = 0;
     private _firstName: string = ''
     private _lastName: string = ''
     get age() {
         return this._age
 
     }
     set age(theAge: number) {
         if (theAge <= 10 || theAge >= 28) {
             throw new Error('Age is invalid to you')
         }
         this._age = theAge
     }
 
     get firstname(): string {
         return this._firstName
     }
     get lastname(): string {
         return this._lastName
     }
 
     set firstname(firstName: string) {
         if (!firstName) {
             throw new Error('this is invalid ')
         }
         this._firstName = firstName
 
     }
     set lastname(lastname: string) {
         if (!lastname) {
             throw new Error('this is not valid ')
         }
         this._lastName = lastname
     }
 
     getFullname() {
         console.log(`${this._firstName} ${this._lastName}`)
     }
 }
 
 
 const p = new Person();
 p.age = 20;
 p.firstname = 'yash';
 p.lastname = 'doifode'
 p.getFullname()



 ----------------------------------ABSTRACT CLASSES-----------------------------------
 abstract class Human{
    abstract Show():any
    abstract add ():number
 }
 
 class Person  extends Human{
     Show(name:number) {
     console.log(name);
     
      }
      add(num1:number ,num2:number) {
         console.log(num1+num2)
          
      }
 }
 const p= new Person()
 p.Show(684)
 p.add(50,5)

 -----------------------------------SINGLETONE --------------------------------
 SINGLETONE- singletone is class creation pattern in which way the obly one instance can created 
 singletone pattern prevents from creating multi instance object of class 
 for making singletone class we have to create private constructor and then create static method and then we cann access them 
 out side the class by  creating  only one  static  instance 
 
 class SingleToneClass{
 
    private static classInstance: SingleToneClass
     private  constructor(name:string){
         if(name ==="yash"){
             console.log('hi my name is '+name)
 
         }
     }
     static method(){
         if(this.classInstance){
             return this.classInstance
 
         }
         this.classInstance = new SingleToneClass('yash')
     }
 }
 SingleToneClass.method()








 =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-INTERFACES-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=
 interface - it is the term of creating contract classes 
 interfaces are bunch of properties ,methods ,and functionality in which all the values are concreate 
 when some object , or class which gonn use or implement the interface it is must to follow the pattern or the functionality which is defined in the interface 
 if  any class implements the interface that should  get must for use or implement all the properties and functionality inside the interface use as it is in class

 basically interface define how the  class gonn look or which methods it should have if he implements the interface 
-----------------------------------------STEPS------------------------------------------
syntax is down 
steps
use interface keyword and define the name  of interface 
create the curley block scope 
write the properties and functionality 
to implement interface to class there is implements keyword are used
we can implements multiple interfaces in one class 
IMP -while implementing initerfaces we must have to go through the structure of that interface  as well and  we can add our own methods and properties in implemented  interface class 
 We can also add readonly property to the variable inside the interface but we cant able to do  
--------------------------------------------------------------------------------------
interface Person {
    name: string;
    age: number;
    education: string;
    printInfo(feature, mobileNo?: number): void
}
let user1: Person;
user1 = {
    name: 'yash',
    age: 22,
    education: "BCA",
    printInfo(feature, mobileNo: number=45) {
        switch (feature) {
            case "name": {
                console.log(this.name, mobileNo);
                break;
            }
            case "age": {
                console.log(this.age)
                break;
            }
            case "education": {
                console.log(this.education)
                break;
            }
        }
    }
}
class School implements Person {
  readonly  name: string ='parallel-minds';
    age: number;
    education: string;
    address: any
    mobileNo: number
    printInfo(mbn: number, add: any) {
        console.log(mbn)
        console.log(this.address = add);
    }
}
let C = new School()
C.printInfo(808049407, 'ghunki kolhapur')
console.log(C.name)
--------------------------INTERFACE EXTENDING----------------------
we can extend interfaces like class and we implement the extended interface in class


interface Add{
    add(a,b)
}
interface sub{
    sub(a,b)
}
interface mul{
    mul(a,b)
}
interface div{
    div(a,b)
}
interface calculation extends Add,sub,mul,div{
    
}
class Calculate implements calculation{
    add(a:number ,b:number){
        console.log(a+b);
        
    }
    sub(a:number ,b:number){     console.log(a-b);}
    div(a:number ,b:number){     console.log(a/b);}
    mul(a:number ,b:number){     console.log(a*b);}

}
const C= new Calculate ()
C.add(5,5)
C.sub(10,9)
C.div(44,22)
C.mul(7,7)

class A{

    constructor(public arr:string[],public name:string){
        // this.arr.push(this.name)
        // console.log(this.arr)
        this.name= name
        this.arr = arr
    
    }
}
const a = new A(['yash','akash'],"om");
console.log(a);
-------------------------------OPTIONAL PARAMETERS------------------------
optional parameters are the parameters that are optional to get value we can assign and value but it is not necessary to  assign it we can skip to assign  value to them also 

const getInfo =(name:string,age:number,mobileNo?:number)=>console.log(name,age,mobileNo);
getInfo('yash',22,8080494027)
getInfo('om',20)
both senario will work but the option parameter will be undefined 
------------------------HOW TO ACCESS PARENT CLASS PROPERTIES---------------------------
class School {
    name:string ;
    age :number
    constructor(a:string ,b:number){
        this.name=a;
        this.age=b

    }
}
class A extends School{
    constructor (age:number,name:string, public c:string){
        super(name,age)
        this.age=age
        this.name=name
        this.c=c
    }
}
const a = new A(22,"YASH","DOIFODE"  )
console.log(a);

*/

// interface GetUerName {
//     (ass?:string): string
// }
// class UserMessage implements GetUerName {
//     GetuserName(a?: string): string {
//         if (a) {
//             console.log(`hi ${a}`);
//         } else {
//             console.log("hi user please Enter Name");
//         }
//         return a
//     }
// }
// const User =new UserMessage()
// User.GetuserName()

