const ages1 = [20,23,22,21,19,20,24,25,23];
const ages2 = [32,34,34,36,37,38];
const ages3 =[43,42,41,44,45,46,46];
const allAges = ages1.concat(ages2).concat([5]).concat(ages3);

const allAges2 = [...ages1,...ages2,5,...ages3];
console.log(allAges2);

const business = 640;
const minister = 340;
const sochib = 230;
const takapoisa =[640,340,230];
const result = Math.max(...takapoisa);
console.log(result);