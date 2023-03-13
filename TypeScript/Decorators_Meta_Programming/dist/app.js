"use strict";
// console.log('Decorator meta-programming')                                                             
//  const a=  document.querySelector('h1') ! as HTMLHeadingElement                                                             
//  a.innerText ='Decorator Meta-Programming'                                                             
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*--------------------------DECORATORS--------------------------
*/
function Logger(loginDetails) {
    return function (constructor) {
        console.log(loginDetails);
        console.log(constructor);
    };
}
function PrintTemplate(template, elementID) {
    return function (constructor) {
        const hookEl = document.getElementById(elementID);
        let p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.age;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'yash';
    }
};
Person = __decorate([
    Logger("loading"),
    PrintTemplate("<h1> hi this is  yash</h1>", 'App')
], Person);
