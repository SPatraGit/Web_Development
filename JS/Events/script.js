let button1 = document.querySelector("#b1");
button1.onclick = () =>{
    alert("Button is clicked");
    console.log("Button is clicked");
}

let div1 = document.querySelector(".div1");
div1.onmouseover = (event) =>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
    console.log("You are inside div1");
    div1.style.backgroundColor = "gray"
}


//Event Listeners

//Insert Event Listeners

const handeler = () =>{
    alert("Button is clicked");
}

let button2 = document.querySelector("#b2");
button2.addEventListener("click", handeler)

button2.addEventListener("click", () =>{
    console.log("Button is clicked");
})

button2.addEventListener("click", () =>{
    button2.style.backgroundColor = "pink";
})


//Delete Event Listeners
button2.removeEventListener("click", handeler);