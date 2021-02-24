const  person = { name:"shawon", id:123, phone:32345,address:"shamoly",profession:"student"};

const {name,phone,id} = person;
console.log( phone, name ,id);


const friends = ['aks','afdi','ghfa','ahif','afh','afhoi'];
const [firstName,secondName,...rest] = friends;

console.log(firstName,secondName,rest);