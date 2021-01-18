var friendAge= [12,234,563,123];

friendAge[2]=19;
var rafik= friendAge[2];
var position = friendAge.indexOf(19);
console.log("rafik age  :" + rafik,friendAge,"position in array list"+ position);
var array =[1,2,3,4,5];
array.push(23);
array.pop();
array.unshift(6);

console.log(array);
 var part =array.slice(0,5);
 var anotherCut = array.splice(0,1);

 console.log(part);
console.log(array);



