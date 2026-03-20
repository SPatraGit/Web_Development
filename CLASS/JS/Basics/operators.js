//Arithmatic Operators
let a = 10;
let b = 3;
console.log("a = " + a);
console.log("b = " + b);

console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));
console.log("a ** b = " + (a ** b)); // Exponentiation operator

//Unary Operators
let c = 5;
console.log("c = " + c);

console.log("++c = " + (++c)); // Pre-increment: increments c before using it
console.log("c++ = " + (c++)); // Post-increment: uses c then increments it
console.log("c = " + (--c)); // Pre-decrement: decrements c before using it
console.log("c-- = " + (c--)); // Post-decrement: uses c then decrements it



//Assignment Operators
let d = 10;
console.log("d = " + d);

d += 5; // Equivalent to d = d + 5
console.log("d += 5: " + d);
d -= 3; // Equivalent to d = d - 3
console.log("d -= 3: " + d);
d *= 2; // Equivalent to d = d * 2
console.log("d *= 2: " + d);
d /= 4; // Equivalent to d = d / 4



//Comparison Operators
let x = 10;
let y = 20;
console.log("x = " + x);
console.log("y = " + y);

console.log("x == y: " + (x == y));
console.log("x != y: " + (x != y));
console.log("x > y: " + (x > y));
console.log("x < y: " + (x < y));
console.log("x >= y: " + (x >= y));
console.log("x <= y: " + (x <= y));
console.log("x === y: " + (x === y)); // Strict equality operator
console.log("x !== y: " + (x !== y)); // Strict inequality operator



//Logical Operators
let p = true;
let q = false;
console.log("p = " + p);
console.log("q = " + q);
console.log("p && q: " + (p && q));
console.log("p || q: " + (p || q));
console.log("!p: " + (!p));
console.log("!q: " + (!q));

//Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can you vote? " + canVote);
