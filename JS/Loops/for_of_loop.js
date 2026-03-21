//For Of Loop

let size = 0;
let str = "IAMAGOODBOY";//String is also an iterable
for(let f of str){
    console.log(f);
    size++;
}
console.log(size);

let size1 = 0;
let arr = ["Mango", "Apple", "Banana"];//Array is also an iterable
for(let g of arr){
    console.log(g);
    size1++;
}
console.log(size1);