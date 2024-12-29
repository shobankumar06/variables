/*let x=5;
if(x%3==0 && x%5==0){
  console.log("hii hello")
}
else if(x%3==0){
  console.log("hii")
}
else if(x%5==0){
  console.log("hello");
}
else{
  console.log("wrong");

let choice = 5;
switch(choice){
  case 1:
    console.log("matched");
  case 2:
    console.log("matched");
  case 3:
    console.log("matched");
  default:
    console.log("not matched");
}*/
/*function add(a,b){
  console.log(a+b);
}
let a=5,b=5;
add(a,b);
*/
//arrow function
/*function add(c,d){
  return a+b;
}
let c=5,d=5;
console.log(add(c,d));

let add=()=>{
  console.log(5+5);
}
add();

let apple=()=>console.log("hii");
apple();

let orange=()=>"orange";
console.log(orange());

let banana=()=>{
  console.log("hello");
  return 3+3;
}
console.log(banana());
*/
//arrow function using the parameter
/*let add=(a,b)=>{
  return(a+b);
}
let a=10,b=10;
console.log(add(a,b));
*/
//spread operator
/*let a=[1,2,3,4,5]
let x=[6,7,8,9,10]
let b=[...a,...x]
console.log(b);


//rest operator
function spreadExample(...values){
  console.log(values);
}
spreadExample(1,2,3,4,5);

function spreadexample(x,y,...values){
  console.log(values);
}
spreadexample(1,2,3,4,5);
*/

/*let object1={
  name:"poontamilAnu",
  class1:"csdb",
  district:"dharmapuri"
};
let object2={...object1};
console.log(object2);

/* //destructuring operator
let a=[1,2,3,4,5]
let [b,c,d,...q]=a;
console.log(d);

let {name,class1,district}=object1;
console.log(name);

*/

//callback function
/*function dog(callback){
  setTimeout(()=>{
    console.log("jack the dog");
    callback();
  },2000);
}
function cat(){
  console.log("rose the cat");
}
dog(cat);
*/
/*

//callback hell
function attendance(callback){
  setTimeout(()=>{
    console.log("present");
    callback();
  },1000);
}
function lunch(callback){
  setTimeout(()=>{
    console.log("lunch");
    callback();
  },1000);
}
function goingtohome(callback){
  setTimeout(()=>{
    console.log("boarded the bus");
    callback();
  },1000);
}
attendance(()=>{
  lunch(()=>{
    goingtohome(()=>{
      console.log("day completed")
    })
  })
})
  */

/*
function attendance(){
  return new Promise((resolve,reject) => {
    let attendanceq=true;
    if(attendanceq){
      resolve("present")
    }
    else{
      reject("absent")
    }
  })
}
function lunch(){
  return new Promise((resolve,reject) => {
    let lunchq=true;
    if(lunchq){
      resolve("finish")
    }
    else{
      reject("hadnt")
    }
  })
}
function goingtohome(){
  return new Promise((resolve,reject) => {
    let goingq=true;
    if(goingq){
      resolve("reached")
    }
    else{
      reject("hadnt")
    }
  })
}

attendance()
  .then((output) => {
    console.log(output);
    return lunch();
  })
  .then((output) => {
    console.log(output);
    return goingtohome();
  })
  .then((output) => {
    console.log(output);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
  */
/*async function finalday() {
     try{
      let atten=await attendance();
      console.log(att);
      let lun=await lunch();
      console.log(lun);
      let go=await goingtohome();
      console.log(go);
     }
     catch(error){
        console.log(error);
     }
 }
`finalday();
*/
let a="poontamil";
function file1(a,callback){
  setTimeout(()=>{
    console.log(`file ${a} is getting processed`)
  },2000);
  setTimeout(()=>{
    console.log(`file ${a} is got downloaded`);
  },2000);
}
function file2(callback){
  setTimeout(()=>{
    console.log("file is got downloaded");
  },2000);
}
file1(a,file2);
file2();
