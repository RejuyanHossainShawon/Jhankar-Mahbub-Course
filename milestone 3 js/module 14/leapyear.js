function isItLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                console.log("This Year Is a leap Year");
            }
            else{
                console.log("This Year Not a leap year");
            }


        }
        else{
            console.log("This Year Is a leap Year");
        }

    }
    else{
        console.log("This Year Not a leap year");
    }

}



isItLeapYear(2016);