const container = document.querySelector("#container");
const btn = document.querySelector("#ask");
const red = document.querySelector("#red")
const white = document.querySelector("#white")
const black = document.querySelector("#black")
const green = document.querySelector("#green")
const multiColor = document.querySelector("#multi-color")
const gridBorder = document.querySelector("#grid-border")
let  grids = (num=16) => {
    for(let i=1; i <= (num**2); i++){
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
        div.style.cssText = `height:${(160000/(num**2))**(1/2)}px; width: ${(160000/(num**2))**(1/2)}px` 
   }
}
grids()
let gridItem = document.querySelectorAll(".grid-item")
gridItem.forEach(item => item.addEventListener("mouseover", 
function() {
    for(let i=1; i< gridItem.length; i++){
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        item.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}))
btn.textContent = "Number of Grids"
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

function colors(WhichOne){
    if(WhichOne== "red") {
        gridItem.forEach(item => item.addEventListener("mouseover", 
            function() {
    item.style.backgroundColor = "red";
            }))
    } else if (WhichOne== "white") {
        gridItem.forEach(item => item.addEventListener("mouseover", 
            function() {
    item.style.backgroundColor = "white";
            }))
    } else if (WhichOne== "green") {
        gridItem.forEach(item => item.addEventListener("mouseover", 
            function() {
    item.style.backgroundColor = "green";
            }))
    } else if (WhichOne== "black") {
        gridItem.forEach(item => item.addEventListener("mouseover", 
            function() {
    item.style.backgroundColor = "black";
            }))
    } else if (WhichOne== "multi-color") {
        gridItem.forEach(item => item.addEventListener("mouseover", 
        function() {for(let i=1; i< gridItem.length; i++){
            const red = Math.floor(Math.random() * 256)
            const green = Math.floor(Math.random() * 256)
            const blue = Math.floor(Math.random() * 256)
            item.style.backgroundColor = `rgb(${red},${green},${blue})`;
        }
    })) 
}
}
