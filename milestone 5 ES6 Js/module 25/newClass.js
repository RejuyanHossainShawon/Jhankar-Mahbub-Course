class person{
    constructor(firstName,lastName,mobile){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
    }
    
    getFull (){
        return this.firstName+" "+this.lastName;

    }
     
}

let full =new person("shawon","hossain",0230478);

console.log(full.getFull());