// variable declaration in typescript 
// let a = 5;
// let b = 'yash';
// we can  declare variable like javascript in ts also 
// But here we can add their type also if in case  we want number value be  store in  the  a variable then  we have to give the instruction in javascript but in typescript we get  error at the compile time like if variable is declared to store only number then we cant  able to store the any other data type in it 
// let num :number;
// num = 'yash'; // this will be through error at compile time 
// we  canonly able to store number 
// num = 45; // this is correct 
// like that there are other data types as well like 
// 1. number - number  data  type  store  float value integet ,decimal, negative 1,1.23,-34
// 2. string  - string data type used to store string  type of value  in '',  "", ``
// 3. object - object data type work as well as javascripit object but in here we can assign the  acceptable value data type for each key 
// 4. array - array are also same but here also we can set the which kind of array we gonn store like string , number,object etc.
// 5. boolean - it store true and false value type 
// 6. tuple - tuple is used to define fixed array with fixed length,data type also 
// 7. enum - 
// 8. any 
var Role;
(function (Role) {
    Role[Role["yash"] = 4] = "yash";
    Role[Role["om"] = 5] = "om";
    Role[Role["akash"] = 6] = "akash";
})(Role || (Role = {}));
var obj1 = {
    role: Role.om
};
if (obj1.role === Role.om) {
    console.log(Role.om);
}
