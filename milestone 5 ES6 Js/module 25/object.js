const normalPerson ={
    firstName:'rejuyan',
    lastName:'shawon',
    salary:16000,

    getFullName : function(){
        console.log(this.firstName,this.lastName);
    },

    charge : function(amount){
        this.salary = this.salary - amount;
        return this.salary;

    }
};
 const  heroPerson={
    firstName:'shawon',
    lastName:'hossain',
    salary:10000,
 };
 const  callPerson={
    firstName:'shawon',
    lastName:'hossain',
    salary:10000,
 };

 const  applyPerson={
    firstName:'shawon',
    lastName:'hossain',
    salary:10000,
 };

// bind formula for using another object method in another object
 const heroChargeBill = normalPerson.charge.bind(heroPerson);
 heroChargeBill(200);
 console.log(heroPerson);

 const callChargeBill = normalPerson.charge.call(callPerson,2000);//direct calling another normalPerson object method using call method
 console.log(callPerson);


 const applyChargeBill = normalPerson.charge.apply(applyPerson,[5000]);//direct calling another normalPerson object method using apply method
 console.log(applyPerson);

