//String
let str = "Hello World";
console.log(str);
console.log(str.length);
console.log(str[0]);
console.log(str[6]);
console.log(str[10]);
console.log(str[11]); //undefined

//String Literal
let student = {
    name: "John Doe",
    age: 20,
    course: "Computer Science"
}
console.log("Student Name is " + student.name);
console.log("Student Age is " + student.age+" years old");
console.log("Student Course is " + student.course);

let age1 = `Student Age is ${student.age} years old`; //Template Literal
console.log(age1);

//String Methods
let str1 = " Snehasis Patra ";
console.log(str1.length);
console.log(str1.trim());
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.includes("Patra"));
console.log(str1.startsWith("S"));
console.log(str1.endsWith("a"));
console.log(str1.indexOf("a"));
console.log(str1.lastIndexOf("a"));
console.log(str1.slice(1, 5));
console.log(str1.replace("Snehasis", "John"));
