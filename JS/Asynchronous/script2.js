//Callback
function sum(a, b){
    let s = a+b;
    console.log("Sum of "+a+" and "+b+" is "+s);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(5, 10, sum);

//Calback Hell
function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("Data", dataId);
        if(getNextData){
            getNextData();
        }
    },3000);
};

getData(101, () => {
    console.log("Data 2 loading...");
    getData(102, () => {
        console.log("Data 3 loading...");
        getData(103, () => {
            console.log("Data 4 loading...");
            getData(104, () => {
                console.log("Data 5 loading...");
                getData(105, () => {
                });
            });
        });
    });
});
