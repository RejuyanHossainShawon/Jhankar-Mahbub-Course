interface Player{
    club:string,
    name:string,
    salary:number,
    wife?:string,
    isPlaying:boolean

}
const messi:Player={
    club:"barcelona",
    name:'mesi',
    salary:324,
    isPlaying:true,
    wife:"asfhi"

}
const ronaldo:Player={
    club:"barcelona",
    name:'ronaldo',
    salary:324,
    isPlaying:true,
    

}

function getBonus(player:Player, friends:string[]){
    return player.salary*.1;


}
getBonus(messi,['skg','sgi']);
const poorPlayer={age:50,salary:34958};



//class


class Person{
    name:string;
    readonly fatherName:string ='fa';//cant change father name
    private partner :string;//you cant access private value from outside of class
   constructor(name:string){
       this.name =name;
       this.partner=name;

   }
  getName():string{
      return this.name;
  }
}
const sam = new Person("samuel");

console.log(sam.name);
const get = sam.getName;
console.log(get);