const container = document.querySelector("#container");
const btn = document.querySelector("#ask");
btn.textContent = "Adject number of grids"
btn.addEventListener("click", function() {
    let numofGrids = prompt("how many columns and rows do you want to create")
    grids(numofGrids, numofGrids)
})

function grids(rows, columns) {
    for(let i=1; i <= (rows*columns); i++){
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
   }
}
grids(16,16)
const gridItem = document.querySelectorAll(".grid-item")
gridItem.forEach(item => item.addEventListener("mouseover", 
function() {
    item.style.backgroundColor = "blue"
}))
// gridItem.forEach(item => item.addEventListener("mouseout", 
// function() {
//     item.style.backgroundColor = ""
// }))
