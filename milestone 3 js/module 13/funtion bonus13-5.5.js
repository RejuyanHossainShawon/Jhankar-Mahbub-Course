function largest(numbers){
    var largest = numbers[0];
    for(var i =0;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest =numbers[i];

        }
    }
     return largest;
    
}


var array =[12,34,32,4,32,456,23,45,32,23];
var result =largest(array);
console.log(result);