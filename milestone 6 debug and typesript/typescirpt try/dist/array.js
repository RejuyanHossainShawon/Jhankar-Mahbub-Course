"use strict";
var numbers = [2, 3, 5, 566, 43, 45];
numbers.push(22);
var friends = ['sgawon', 'sgfiuhi', 'fj'];
var megaName = '';
for (var i = 0; i < friends.length; i++) {
    var friend_1 = friends[i];
    if (friend_1.length > megaName.length) {
        megaName = friend_1;
    }
}
console.log(megaName);
// object
var friend2 = {
    name: 'shawonm',
    age: 3,
};
var friend = {
    name: "shaown",
    age: 23,
};
var player;
player = {
    club: 'liverpool',
    age: 23,
};
