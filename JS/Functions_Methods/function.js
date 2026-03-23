//Function
function myFunction() {
    console.log("Hello! Welcome to Apna College"); //without parameter
}




myFunction();

function myFunction2(name) {
    console.log("My name is " + name); //with parameter
}
myFunction2("Snehasis Patra");//passing argument to the function

function myFunction3(name, age) {
    console.log("My name is " + name + ". My age is " + age); //with multiple parameters
}
myFunction3("Snehasis Patra", 25);//passing multiple arguments to the function





function myFunction4(marks = 100) {
    console.log("Your marks is " + marks); //with default parameter
}
myFunction4(); //calling function without argument, it will use default parameter
myFunction4(85); //calling function with argument, it will override default parameter



function sum(a, b) {
    s = a+b;
    return s;
}
let result = sum(5, 10);
console.log("The sum is: " + result);