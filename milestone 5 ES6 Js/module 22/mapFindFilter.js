let numbers =[1,2,3,4,5,6,7,8,9];


const result = numbers.map(x => x*2);//can used as a loop three value can used element,index,full array list
 const result2 = numbers.filter(x => x<3);//return an array 
const result3 = numbers.find(x => x>8);// return a element


numbers.map(function(element,index,array){
    console.log(element,index,array);
})



console.log(result3);