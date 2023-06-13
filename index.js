const container = document.querySelector("#container");
const btn = document.querySelector("#ask");

function grids() {
    for(let i=1; i <= (16*16); i++){
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
   }
}
grids()
const gridItem = document.querySelectorAll(".grid-item")
gridItem.forEach(item => item.addEventListener("mouseover", 
function() {
    item.style.backgroundColor = "blue"
}))
gridItem.forEach(item => item.addEventListener("mouseout", 
function() {
    item.style.backgroundColor = ""
}))
