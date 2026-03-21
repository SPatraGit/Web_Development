console.log("Hello World");
console.log("My First JavaScript Program");

fullname = "Snehasis Patra";
console.log(fullname);
console.log(typeof fullname);

age = 22;
typeof age;
console.log(age);
console.log(typeof age);

price = 150.67
console.log(price);
console.log(typeof price);

x = null;
console.log(x);
console.log(typeof x);

y = undefined;
console.log(y);
console.log(typeof y);

isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);


var city = "Bangalore"; // var is function-scoped and can be redeclared and updated
console.log(city);

let country = "India"; // let is block-scoped and can be updated but not redeclared within the same scope
console.log(country);

const pi = 3.14159; // const is block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration.
console.log(pi);



const student = {
    name: "Snehasis",
    age: 22,
    cgpa : 8.5,
    isEnrolled: true
};

student["age"] = student["age"] + 5; // Updating the age property of the student object

console.log(student);
console.log(typeof student);

console.log(student.name);

console.log(student["age"]);


console.log(1+2);
console.log("Snehasis " + "Patra");