// console.log('Decorator meta-programming')                                                             
//  const a=  document.querySelector('h1') ! as HTMLHeadingElement                                                             
//  a.innerText ='Decorator Meta-Programming'                                                             
                                                              
/*--------------------------DECORATORS--------------------------                                                              
*/                                                             
function Logger(loginDetails: string) {                                                             
    return function (constructor: Function) {                                                             
        console.log(loginDetails)                                                             
        console.log(constructor)                                                             
    }                                                             
}                                                             
function PrintTemplate(template: string, elementID: string) {                                                             
    return function (constructor: any) {                                                             
        const hookEl = document.getElementById(elementID)!;                                                             
        let p = new constructor()                                                             
                                                             
        if (hookEl) {                                                             
            hookEl.innerHTML = template                                                             
            hookEl.querySelector('h1')!.textContent = p.age                                                             
        }                                                             
    }                                                             
}                                                             
@Logger("loading")                                                             
@PrintTemplate("<h1> hi this is  yash</h1>",'App')                                                             
                                                             
class Person {                                                             
    name = 'yash'                                                             
    constructor() {                                                             
    }                                                             
}                                                             
                                                             
