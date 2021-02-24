 function  fibonacci(n) {
 if(n == 1){
     return 1;
 }
if (n == 0){
    return 0;
}
else{
    return n = fibonacci(n-1)+ fibonacci(n-2);
}
   

   
}


var result = fibonacci(3);
console.log(result);