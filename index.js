const container = document.querySelector("#container");
const btn = document.querySelector("#ask");


let  grids = (num=16) => {
    for(let i=1; i <= (num**2); i++){
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
   }
}
grids()
let gridItem = document.querySelectorAll(".grid-item")
gridItem.forEach(item => item.addEventListener("mouseover", 
function() {
    item.style.backgroundColor = "blue"
}))
btn.textContent = "Adject number of grids"
btn.addEventListener("click", function() {
    let numofGrids = prompt("how many columns and rows do you want to create")
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    for(let i=1; i <= (numofGrids**2); i++){
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
   }
})

