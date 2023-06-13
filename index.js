const container = document.querySelector("#container");
const btn = document.querySelector("#ask");
let  grids = (num=16) => {
    for(let i=1; i <= (num**2); i++){
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
        div.style.cssText = `height:${(102400/(num**2))**(1/2)}px; width: ${(102400/(num**2))**(1/2)}px` 
   }
}
grids()
let gridItem = document.querySelectorAll(".grid-item")
gridItem.forEach(item => item.addEventListener("mouseover", 
function() {
    for(let i=1; i< gridItem.length; i++){
        const red = Math.floor(Math.random() * 257)
        const green = Math.floor(Math.random() * 257)
        const blue = Math.floor(Math.random() * 257)
        item.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}))
btn.textContent = "Adject number of grids"
btn.addEventListener("click", function() {
    let numofGrids = prompt("how many columns and rows do you want to create")
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    grids(numofGrids)
   gridItem = document.querySelectorAll(".grid-item")
   gridItem.forEach(item => item.addEventListener("mouseover", 
function() {
    item.style.backgroundColor = `rgb(${red},${green},${blue})`;
}))
})

