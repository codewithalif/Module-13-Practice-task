var a = isNaN('11');
console.log(a);
var a = isNaN(2-10);
console.log(a);

// 1* var a = isNaN('11');
// '11' is a string but can be a number → false

// 2* var a = isNaN(2-10);
// 2-10 = -8, a number → false

// Note: isNaN() is true only if value is not a number.