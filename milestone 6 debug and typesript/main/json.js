const person = {
  name: 'sahwon ',
  age:21,  
};
//json convert back and forth
const json = JSON.stringify(person);
console.log(json);

const data = JSON.parse(json);
console.log(data);

//local storage
//local storage data set
          localStorage.setItem("UserId",34364);
// local storage data get
        
           const id= localStorage.getItem("UserId");
            console.log(id);


// local storage object send must be converted into json stringify


localStorage.setItem("person",JSON.stringify(person));

const storedFile = localStorage.getItem('person')//storedFIle is now in json format for access in js you should convert

const convert = JSON.parse(storedFile);
console.log(convert.age);

// object keys only 
const keys = Object.keys(convert);
console.log("only keys ",keys);

// object values only
const values = Object.values(convert);
console.log(values);