//Promises
function getData(dataId , getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("Data", dataId);
            //resolve("Success");
            //reject("error");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
};


//Then and Catch
const getPromise = () => {
    return new Promise((resolve, reject) => {
        //console.log("I am a Promise");
        //resolve("Success");
        //reject("Error");
    });
};

let promise = getPromise();

promise.then((res) => {
    console.log("Promise fulfilled", res);
});

promise.catch((err) => {
    console.log("Promise rejected", err);
});


//Promises Chain
function asynFun1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            //console.log("Success")
        },3000);
    });
};

function asynFun2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            //console.log("Success")
        },3000);
    });
};

console.log("Feaching Data 1 ...");
let p1 = asynFun1();
p1.then((res) => {
    console.log("Feaching Data 2 ...");
    let p2 = asynFun2();
    p2.then((res) => {
    });
});