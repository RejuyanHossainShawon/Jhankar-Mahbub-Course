// swap with temp variable
console.log("swap with temp variable");

var a = 5;
var b = 7;
console.log("Before the swap a= ", a, "  b=", b);
var temp;
temp = a;
a = b;
b = temp;
console.log("After the swap a= ", a, "  b=", b);

// swap without any extra variable with mathematical term
console.log("swap without any extra variable with mathematical term");
var x = 5;
var y = 7;
console.log("Before the swap x= ",x,"  y=",y);
x = x+y;
y = x-y;
x = x-y;
console.log("After the swap x= ",x,"  y=",y);


// swap with destructing 


var p =5;
var q =7;
console.log("Before the swap p= ",p,"  q=",q);

[p ,q] = [q, p];
console.log("After the swap p= ",p,"  q=",q);

