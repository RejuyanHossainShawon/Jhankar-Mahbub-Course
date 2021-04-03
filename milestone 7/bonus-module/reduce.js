const friends = [
    {name:'rohim',money:243},
    {name:'karim',money:24},
    {name:'bohim',money:23},
    {name:'tohim',money:73},
    {name:'cohim',money:13},

];

const total = friends.reduce((sum,friend)=>sum+=friend.money,0);
console.log(total);