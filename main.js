

// task 1
function show() {
  const show = document.getElementById("div-id");
  show.style.display = "block";
}
function hide() {
  const hide = document.getElementById("div-id");
  hide.style.display = "none";
}



// task 2

document.write("<h3>Hello i'm New One 1</h3>, <div><ul><li>One</li><li>Two</li><li>Three</li><li>Four</li></ul></div>")

const creatone1 = document.createElement("li")
creatone1.innerHTML = "Five"
const newone = document.querySelectorAll("div, ul")[1]
newone.appendChild(creatone1)