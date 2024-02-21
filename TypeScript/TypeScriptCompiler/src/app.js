// console.log("Typescript compiler ");
// --------------------------How to compile one file automatically when  their is change in it ----------------------
// tsc <file_name> --watch
// by using this command the compiler  will  compile file automatically when we make changes  in it
// ---------------------------------COMPILE ALL FILE WHEN GET  MODIFIED ---------------------------
// how to compile all files in same time  when it gets modified 
// tsc -- init
// this command  will  install the tsconfig.json file
// that file will watch on all file and let know the  compiler the modification  
// then we hit tsc  --watch command  to all files 
// -----------------------------EXCLUID AND INCLUID  FILES  --------------------------------
//  we can prevent perticular  files from compiling through passing them  in the  array of 
//  excluid in  tsconfig.json  file  
// "excluid":[ 'file name']
// like  that we can  also  include  which  file we just want to compile  by using incluid array
// "incluid":[file name]
// node_modules file is default excluid file so we dont  have to add it in excluid array 
// const btn = document.querySelector('button') !
// btn.addEventListener('click',()=>{
//     console.log('hi')
// })
function sendSome(data) {
    console.log(data);
}
sendSome('hi i am heres yash !!!!');
