var marks = [12,34,6,45,35,76,87,65,43,89,99,76,55,100,100,36,5,23];
var max = marks[0];
for(var i =0 ;i <marks.length;i++){
    if(max<marks[i]){
        max = marks[i];
    }

}
console.log("The highest value of number is :",max);

// Array function find out the total sum 

function sum(num){
var sum =0;
for(var i=0;i<num.length;i++){
    var element = num[i];
    sum += element;
}
return sum;
}

var num = [1,4,5,5,2,3,8,5,4,3,4];
var result = sum(num);
console.log(result);

var resultAgain = sum([2,3,4,5,4,2]);
console.log(resultAgain);