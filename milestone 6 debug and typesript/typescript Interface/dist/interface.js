"use strict";
var messi = {
    club: "barcelona",
    name: 'mesi',
    salary: 324,
    isPlaying: true,
    wife: "asfhi"
};
var ronaldo = {
    club: "barcelona",
    name: 'ronaldo',
    salary: 324,
    isPlaying: true,
};
function getBonus(player, friends) {
    return player.salary * .1;
}
getBonus(messi, ['skg', 'sgi']);
var poorPlayer = { age: 50, salary: 34958 };
//class
var Person = /** @class */ (function () {
    function Person(name) {
        this.fatherName = 'fa'; //cant change father name
        this.name = name;
        this.partner = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var sam = new Person("samuel");
console.log(sam.name);
var get = sam.getName;
console.log(get);
