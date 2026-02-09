//               0123456789
let umaString = 'Era uma vez um programador';
console.log(umaString.charAt(6));
console.log(umaString[5]);
console.log(umaString.concat(' gente boa'));

console.log(umaString.indexOf('z', 5));
console.log(umaString.lastIndexOf('u', 14));
console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/d/));
console.log(umaString.replace(/Era/, 'Apareceu'));
console.log(umaString.replace(/a/g, '#'));

console.log(umaString.length);
console.log(umaString.slice(4, 7));
console.log(umaString.slice(-11));

console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());