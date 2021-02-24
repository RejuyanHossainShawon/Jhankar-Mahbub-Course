function add(){
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum+=arguments[i];
    }
    return sum;
}


var res=add(6,6,6,6,6,6);
console.log(res);