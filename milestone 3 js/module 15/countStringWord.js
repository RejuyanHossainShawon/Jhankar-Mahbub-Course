var lecture = "Here comes the rain again. Raining on my head like tragedy, its tear me apart like new emotion."
var count=0;
for(var i=0;i<lecture.length;i++){
    var ch = lecture[i];
    if(ch ==" " && lecture[i-1] != " "){
       count++;

    }
}
count ++;
console.log("This is a sentence: ",count,"word");