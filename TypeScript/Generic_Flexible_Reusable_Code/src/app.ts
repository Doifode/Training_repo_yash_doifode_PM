const a = document.querySelector('h1')! as HTMLHeadingElement
a.innerText = "hi this is generic flexible and reusable coding file"
/* 
-------------------GENERIC TYPES--------------------
Generics are used when function or properties we created is  not having  definite data type then  we use generic types
so we can assing differnet arguments and access them at same time

function GetObject<T,U>(obj1:T ,obj2:U ){
    return Object.assign(obj1, obj2);
}
console.log( GetObject({name:'yash'},{age:22}));

---------------------------CONSTRAINS--------------------
Constrains are the supportive feature to the  generic function that // we use constrains to specify the  type of the  genric is  gone be  what 
so by using constrains here we can specify the parameters must be  object type and can be any structure and data type 
To define constrains we use extends key word 

function MergeObject<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2)
}
// MergeObject({name:'yash',age:22},{dist:'kolhapur'},{height:147})
MergeObject({ name: 'yash', age: 22 }, { dist: 'kolhapur' })

-------------------------KEYOF KEY WORD------------------------

function GetObjVal <T extends object , U extends keyof T>(obj1:T,obj2:U){
    return "value of"+ obj1 [obj2]

}
GetObjVal({Name:'yash'},"Name")
GetObjVal({age:'yash'},"age")
GetObjVal({height:'yash'},"height")

------------------------GENERICS WITH CLASSES-----------------

class ArrayManage <T extends string|object|boolean|number>{
data:T[]=[]

addArray(item:T){
    this.data.push(item)
}
printArray(){
    return this.data
}
removeData(itemIndex:number){
    return this.data.splice(itemIndex,1)
}
}
const A= new ArrayManage()
A.addArray({name:'yash'})
A.addArray({name:'om'})
A.addArray({name:'ruturaj'})
console.log(A.data)
A.removeData(0)
console.log(A.data)
*/
