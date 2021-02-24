let age:number = 50;
let myName:string ="shawon";
const isFamous:boolean = false;
let famous:boolean;
famous = true;

//return type not declared
function add(num1: number |string,num2:number|string){
    return num1 + num2;
}
add(4,3);
add("shsa",9);
// return type declared 

function fullName(firstName:string,lastName:string):string{
    return firstName + " "+ lastName;
}
//when  you are calling a return type declared function that time you should 
//call by declared type variable like as a:string
let a:string= fullName("rejuyan","shawon");


// void type function 

function doubleIt(num:number):void{
    const result = num*2;
    console.log(result);
}

doubleIt(20);
// undefined because its a void type function
const g= doubleIt(20);
console.log(g);

// arrow function

const multiply=(num1:number,num2:number):number=>
 num1*num2;


 const b:number= multiply(20,34);
 console.log(b);

//  another way of arrow function like only variable declare


let multiply2:(num1:number,num2:number)=>number;
multiply2=(num1,num2)=>num2*num1;



