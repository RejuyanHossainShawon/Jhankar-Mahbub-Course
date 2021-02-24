function inchToFeet(inch){
    var feet =inch/12;
    feet = Math.floor(feet);
    var inch = inch%12;
    var result ={Feet:feet,Inch:inch};
    return result;
}

var result= inchToFeet(29);
console.log(result);
