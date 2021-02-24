const students = [
    {id:21,name:"omar Sunny"},
    {id:31,name:"Maana"},
    {id:41,name:"moyouri"},
    {id:51,name:"Deepjol"},
    

]
// let array =[];
// for(let i=0 ; i<students.length;i++){
    
//     array.push(students[i].name);
// }
// console.log(array);
// let result = students.map(x=>x.name);
//  console.log(result);

let result = students.filter( x  => x.name );
  console.log(result);