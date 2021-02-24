const numbers: number[] =[2,3,5,566,43,45];
numbers.push(22);

const friends:string[]= ['sgawon','sgfiuhi','fj'];

let megaName:string ='';
for (let i = 0; i < friends.length; i++) {
    const friend:string = friends[i];
    if(friend.length >megaName.length){
        megaName = friend;
    }
    
}
console.log(megaName);

// object

let friend2:{
    name:string,
    age:number
}={
    name:'shawonm',
    age:3,
}

const friend={
    name:"shaown",
    age:23,

}

let player:{
    club:string,
    age:number,
   
}

player={
    club:'liverpool',
    age:23,
    
}