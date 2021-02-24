let food;
const money = 50;
//normal way to write a condition 
// if(money>100){
//     food='biriyani';
// }
// else{
//     food="alurborta";

// }

// shortcut way to write condition with ternary operator 
// variable = condition ?true value :false value
 food = money>100?'biriyani':'alurborta';
 console.log(food);

 
 const active=false;
 const cssClass = active?'active':'inactive';
 console.log(cssClass);
 //ternary operator  call when there is an alternative condition 
 
 
        //    active? displayUser():hideUser();
 // ternary operator used when there is single condition

 // if active is true then it call display function
 
 
            //  active && displayUser();
 // if active is false then it call display function otherwise not 
 
 
    //    active || displayUser();

//example 

const x= active && 6;// active = true then x=6 otherwise only active value showed 

const y= active || 6;//only active = false then x=6 otherwise only active value showed 

console.log(x);

// string to number convert with plus sign in js \

const num= +"45";
console.log(num);

// string to number convert with plus a empty string with number
const num3= 45+"";

       
console.log(num3);

// default parameter 

function add (num1,num2=6){
    return num1+num2;
}
add(6);// calling without second parameter
// another type for default parameter using ternary single condition operator 
function add2 (num1,num2){
    num2 = num2 || 6;
    return num1+num2;

}



 


