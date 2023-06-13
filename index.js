const container = document.querySelector("#container");

function grids() {
    for(let i=1; i <= (16*16); i++){
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
   }
}
grids()
const gridItem = document.querySelectorAll(".grid-item")
gridItem.forEach(item => item.addEventListener("hover", 
function() {
    item.style.backgroundColor = "blue"
}))
