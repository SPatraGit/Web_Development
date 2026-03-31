let div = document.querySelector("#div1");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let paragraph1 = document.querySelector(".para1");
console.log(paragraph1);

let classvul = paragraph1.setAttribute("para1", "paragraph1");


let div2 = document.querySelector("#div2")
console.log(div2);
div2.style.backgroundColor = "lightpink";
div2.style.fontSize = "30px";
div2.style.color = "blue";


//Insert Elements
let button = document.createElement("button");
console.log(button);

button.innerText = "Click Me!";

let div1 = document.querySelector("#div1");
//div1.append(button);
//div1.prepend(button);
//div1.before(button);
div1.after(button);


//Delete Elements
let para = document.querySelector(".para1");
para.remove();