// array destructuring
const numbers = [54,92];
// const x = numbers[0];
// const y = numbers[1];
const[x,y]= numbers;
//console.log(x,y);



function boxify(num1){
    return [num1,num1+5];
}

const [box1,box2] = boxify(8);
console.log(box1,box2);
// object destructuring

const person= {id:3,name:'rahim ',age :25};
const{name}=person;
console.log(name);

// create objet shortcut
const one=25;
const two=34;
const obj={one,two};
console.log(obj);

// new array create by three dots

const num3 = [...numbers,556];
console.log(num3);