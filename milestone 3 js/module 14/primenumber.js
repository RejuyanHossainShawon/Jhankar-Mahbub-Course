function prime(n){
    for(var i=2; i<n ;i++){
        if(n%i==0){
            return "this is not a prime number";
        }

    }
    return "this is a prime number";
}
var result = prime();
console.log(result);