// forEach Method


//Using forEach method to iterate through the array
let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
    console.log(element);
});


//Arrow function with forEach method
let arr2 = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
arr2.forEach((element, index, array) => {
    console.log(element, index, array);
    console.log(element.toUpperCase());
    console.log(element.length);
});



//Map method
let arr3 = [1, 2, 3, 4, 5];
let newArr = arr3.map(function(element) {
    return element * 2;
});
console.log(newArr);//new array with modified values
console.log(arr3); //original array is not modified



//Filter method
let arr4 = [1, 2, 3, 4, 5];
let filteredArr = arr4.filter(function(element) {
    return element % 2 === 0; //filter even numbers
});
console.log(filteredArr); //new array with filtered values
console.log(arr4); //original array is not modified


//Reduce method
let arr5 = [1, 2, 3, 4, 5];
let sum1 = arr5.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum1); //sum of all elements in the array
