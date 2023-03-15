"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ProjectState {
    constructor() {
        this.projects = [];
        this.listener = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addListerner(listernerFn) {
        return this.listener.push(listernerFn);
    }
    addProjectDtl(title, description, NumOfpeople) {
        const newProject = {
            id: Math.random().toString(),
            title: title,
            description: description,
            people: NumOfpeople,
        };
        this.projects.push(newProject);
        for (const listernerFn of this.listener) {
            listernerFn(this.projects.slice());
        }
    }
}
const projectstate = ProjectState.getInstance();
class ProjectList {
    constructor(type) {
        this.type = type;
        this.assignedProjects = [];
        // this is the literal type parameter which we gonn use to decide the id of the element
        this.hostElement = document.getElementById("app");
        // get the div from dom
        this.templateElement = document.getElementById("project-list"
        // get the  template element by id
        );
        const importNode = document.importNode(this.templateElement.content, true);
        // importNode store the element in side and we can assign them to other propertis
        this.element = importNode.firstElementChild;
        // here the importNode have the temmplateElement's content and assign to the element
        this.element.id = `${this.type}-projects`;
        // the element id has assign depends on the parameter
        projectstate.addListerner((projects) => {
            this.assignedProjects = projects;
            this.renderProject();
        });
        this.attach();
        this.renderContent();
        // renderContent() method is called here to assign the id's to the child elements
        //attach() method is called here to to render the this.element element beforeend of the hostElement element
    }
    renderContent() {
        const listID = ` ${this.type}-projects-list`;
        this.element.querySelector("ul").id = listID;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + "PROJECTS";
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
        // the element is render in hostElement by this method
    }
    renderProject() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        for (const prjItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
    }
}
function validate(validatableInput) {
    // validate is functio which get parameter of validatable interface and evaluate it
    let isValid = true;
    // isValid is the variable which store  the boolean value and returns it when it the function get evaluate
    if (validatableInput.require) {
        // validatableInput.require is the is parameter value if it is passed then it will check the following condition  and decide the value of isValid variable
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
        // here if the validatable.value.toString().trim().lenght !== 0 it checkt the input field is empty or typed then when the both condition will true then the isValid is true otherwise it false
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === "string") {
        // here if conditoin check the ValidatableInput.maxLenght is null or not then it check is it string if both conditionn is satisfied and become true then it come under the block
        isValid =
            isValid && validatableInput.value.length >= validatableInput.maxLength;
        // here isValid value is decide through validatableInput.value.length his greater than or equal to the value that the user provide during interface implementation
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === "string") {
        // here if conditoin check the ValidatableInput.maxLenght is null or not then it check is it string if both conditionn is satisfied and become true then it come under the block
        isValid =
            isValid && validatableInput.value.length >= validatableInput.minLength;
        // here isValid value is decide through validatableInput.value.length his greater than or equal to the value that the user provide during interface implementation
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === "number") {
        // if condition check the validatableInput.min is not has to null and the typeof validatableInput .value must be number if both condiition becomes true then next block of code get executed
        isValid = isValid && validatableInput.value >= validatableInput.min;
        // here validatableInput.value is greate than validatableInput.min is checked then isValid is become true
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === "number") {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
    // on evaluetion then the final value of the isValid is return from the function
}
// creating decorator to bind the property to the class
function autoBind(_1, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDecorator = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDecorator;
}
class inputProject {
    // this property get people input element
    constructor() {
        this.templateElement = document.getElementById("project-input");
        // get project-input template tag using  document object
        this.hostElement = document.getElementById("app");
        // get div of id app
        const importNode = document.importNode(this.templateElement.content, true);
        // get import of templateElement content and store it in importNode property
        this.element = importNode.firstElementChild;
        // storing the templateElement.content as the first child of element element
        this.element.id = "user-input";
        // giving the user-input id to the  element element
        this.titleInputElement = this.element.querySelector("#title");
        // getting access of the input  elements
        this.descriptionInputElement = this.element.querySelector("#description");
        // getting access of the input  elements
        this.peopleInputElement = this.element.querySelector("#people");
        // getting access of the input  elements
        this.attach();
        this.configur();
    }
    gatherInput() {
        // gatherInput is the functioin which return tuple type array value
        const titleTxt = this.titleInputElement.value;
        // here variable store the value of the input
        const descriptionTxt = this.descriptionInputElement.value;
        const peoplrTxt = this.peopleInputElement.value;
        const enterTitleTxt = {
            // enterrTitle variable is type of our interface that defines the validation on the input tag
            value: titleTxt,
            require: true,
        };
        const enteredDescriptionTxt = {
            require: true,
            value: descriptionTxt,
            minLength: 5,
        };
        const enteredPeopleTxt = {
            require: true,
            value: +peoplrTxt,
            min: 1,
            max: 5,
        };
        if (!validate(enterTitleTxt) ||
            !validate(enteredDescriptionTxt) ||
            !validate(enteredPeopleTxt)) {
            // the intereface object that created are  passed in validate function and function is pass to the if condition validate  function return true or false  depende on that the alert will call
            // validate function is used to check the validation lenght ,datatype ,maxlenght and  minlength and by evalating the values from input return the true or false
            alert("Please enter information into input ..");
            return;
        }
        else {
            return [titleTxt, descriptionTxt, +peoplrTxt];
        }
    }
    clearInput() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
        // clear function is defined  to clear the input field when the submit button  were clicked
    }
    // autoBind is decorator used to refere direct the function
    handleSubmit(event) {
        event.preventDefault();
        const userInput = this.gatherInput();
        if (Array.isArray(userInput)) {
            const [tit, des, peo] = userInput;
            projectstate.addProjectDtl(tit, des, peo);
            this.clearInput();
        }
    }
    configur() {
        // element is form elemment were we used the eventlistener of submit
        this.element.addEventListener("submit", this.handleSubmit);
    }
    attach() {
        // attach method used to render the hostElement in div beforebegin and the second argument is which html you wann to render
        this.hostElement.insertAdjacentElement("beforebegin", this.element);
    }
}
__decorate([
    autoBind
    // autoBind is decorator used to refere direct the function
], inputProject.prototype, "handleSubmit", null);
const prjInput = new inputProject();
const activePrjList = new ProjectList("active");
const FinishedPrjList = new ProjectList("finished");
// Validation
