function program(name , age , task){
    console.log("Hello ",name);
    console.log("your age is ",age);
    task();
}
function shower(){
    console.log("take a shower");
}
 function wash(){
     console.log("Wash your hand");
 }


 program("rejuyan",21,wash);