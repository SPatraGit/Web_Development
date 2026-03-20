//Array Creation

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

//Accessing Array Elements
console.log(arr1[0]); 
console.log(arr1[2]);


//Modifying Array Elements
arr1[1] = 20;
console.log(arr1);


//Array Length
console.log(arr1.length);


//loop through array
let arr2 = ["Apna", "College", "is", "the", "best"];

for(let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

//Array Methods
let arr3 = [1, 2, 3];
arr3.push(4); // Adds 4 at the end
console.log(arr3);

arr3.pop(); // Removes the last element
console.log(arr3);

arr3.unshift(0); // Adds 0 at the beginning
console.log(arr3);

arr3.shift(); // Removes the first element
console.log(arr3);

arr3.splice(1, 0, 1.5); // Inserts 1.5 at index 1
console.log(arr3);

arr3.slice(1, 3); // Returns a new array from index 1 to 2
console.log(arr3.slice(1, 3));

arr3.toString(); // Converts array to string
console.log(arr3.toString());

//Concatenation
let arr4 = [5, 6, 7];
let arr5 = arr3.concat(arr4);
console.log(arr5);