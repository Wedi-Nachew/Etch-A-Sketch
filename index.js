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
gridItem.forEach(item => item.addEventListener("mouseover", colors()))



btn.addEventListener("click", function() {
    let numofGrids = prompt("how many columns and rows do you want to create")

    while(container.firstChild){
        container.removeChild(container.firstChild)
    }

   grids(numofGrids)

   gridItem = document.querySelectorAll(".grid-item")
   gridItem.forEach(item => item.addEventListener("mouseover", colors()))
})

function colors(WhichOne = "black"){
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
function backgroundColor(option){
    if(option =="red-bkg") {
        container.style.backgroundColor = "red"
    } else if (option == "white-bkg") {
        container.style.backgroundColor = "white"
    } else if(option =="black-bkg"){
        container.style.backgroundColor = "black"
    } else if(option == "green-bkg"){
        container.style.backgroundColor = "green"
    }
}

function eraser() {
    gridItem.forEach(item => item.addEventListener("mouseover", ()=> {
        item.style.backgroundColor = `${container.style.backgroundColor}`
    }))
}

function clearAll() {
    gridItem.forEach(item => {
        item.style.backgroundColor = "";
    })
    
}
const border = document.querySelector("#border")
border.addEventListener("change", () => {
    if(border.checked){
        gridItem.forEach(item => {
            item.style.border = "1px solid gray"
            })
    } else {
        gridItem.forEach(item => item.style.border = "none")
    }
})

// const hideGrids = document.getElementById("hide-grids")
// hideGrids.addEventListener("click", ()=> {
//     gridItem.forEach(item => item.style.cssText = "border: none;")
// })