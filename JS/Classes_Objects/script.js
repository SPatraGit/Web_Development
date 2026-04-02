const student = {
    fullName : "Shan",
    rollNumber : 20,
    marks : 94.5,
    printMarks : function(){
        console.log("Marks is " + this.marks);
    }
};

// Prototype
const employee = {
    calTax(){
        console.log("Tax is 15%");
    }
};

const sPatra = {
    salary : 50000,
    calTax(){
        console.log("Tax is 20%");
    }
};

sPatra.__proto__ = employee;

//Class & Object
class Car{
    constructor(price, color){
        console.log("Creating a new object");
        this.price = price;
        this.color = color;
    }
    start(){
        console.log("Car Is Starting...");
    }
    stop(){
        console.log("Car Is Stopping...");
    }
    //setPrice(price){
       // this.price = this.price;
        //console.log("Price is "+price);
    //}
};
let maruti_sujuki = new Car(1000000, "Red");
console.log(maruti_sujuki);
let tata_motor = new Car(2000000, "White");
console.log(tata_motor);



//Inheritance
class Dog{
    eat(){
        console.log("It is eating");
    }
}
class Puppy extends Dog{
    sleep(){
        console.log("It is sleeping");
    }
}
let p1 = new Puppy();


//Super Keyword
class Person{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("Eating");
    }
}
class Engineer extends Person{
    constructor(name){
        super(name); //to invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("Daily Working in coding in office");
    }
}
let e1 = new Engineer("Snehasis Patra");

