"use strict";
var age = 50;
var myName = "shawon";
var isFamous = false;
var famous;
famous = true;
//return type not declared
function add(num1, num2) {
    return num1 + num2;
}
add(4, 3);
add("shsa", 9);
// return type declared 
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
//when  you are calling a return type declared function that time you should 
//call by declared type variable like as a:string
var a = fullName("rejuyan", "shawon");
// void type function 
function doubleIt(num) {
    var result = num * 2;
    console.log(result);
}
doubleIt(20);
// undefined because its a void type function
var g = doubleIt(20);
console.log(g);
// arrow function
var multiply = function (num1, num2) {
    return num1 * num2;
};
var b = multiply(20, 34);
console.log(b);
//  another way of arrow function like only variable declare
var multiply2;
multiply2 = function (num1, num2) { return num2 * num1; };
