class father{
    constructor(){
        this.fatherName = "schenzearbag";
    }
}


class Child extends father {
  
   constructor (name){
       super();
       this.name = name;
       
      

   }
   getFullName(){
       return this.name +" "+ this.fatherName;

}
}
const baby = new Child("rakib");
const baby2 = new Child("rokib");
console.log(baby.getFullName(),baby2);