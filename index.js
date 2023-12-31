const container = document.querySelector("#container");
const btn = document.querySelector("#ask");
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const multiColor = document.querySelector("#multi-color")
const gridBorder = document.querySelector("#grid-border")
const output = document.getElementById("output");
let linesCount = 0;
let selectedColor = "";
const pick = document.getElementById("color-palette");
const markerSvg = document.querySelector(".marker-svg");
const backgroundSvg = document.querySelector(".background-svg")
const pickBkg = document.getElementById("pick-bkg");

let grids = (num = 16) => {
    let size = Math.sqrt(parseFloat((450 * 450)/ (num ** 2)))
    for (let i = 1; i <= (num ** 2); i++) {
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
        div.style.cssText = `height:${size}px; 
        width: ${size}px;`
        div.addEventListener("mouseover", ()=> {
            if(selectedColor== "multi-color"){
                randomColor();
            }else {
                div.style.backgroundColor= `${selectedColor}`;
            }
        })
        container.setAttribute(`style`, `grid: 1fr / repeat(${num}, 1fr)`);
        (linesCount) ? div.style.cssText += "border: 1px solid gray" 
        : div.style.cssText += "border: none"
    }
    
}
grids()
    
let gridItem = document.querySelectorAll(".grid-item")
gridItem.forEach(item => item.addEventListener("mouseover", colors))


btn.addEventListener("input", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    grids(btn.value);
    output.value = btn.value + " x " + btn.value;
    gridItem = document.querySelectorAll(".grid-item")
    gridItem.forEach(item => item.addEventListener("mouseover", colors)
    )})

gridBorder.addEventListener("click", () => {
    if (!linesCount) {
        gridItem.forEach(item => item.style.border = "1px solid gray");
        gridBorder.textContent = "Remove Lines";
        linesCount++;
    } else if (linesCount) {
        gridItem.forEach(item => item.style.border = "none");
        gridBorder.textContent = "Toggle Lines"
        linesCount = 0;
    }
})

function colors(WhichOne="pick") {
    if (WhichOne == "red") {
        selectedColor = "red";
        gridItem.forEach(item => item.addEventListener("mouseover",
            function () {
                item.style.backgroundColor = "red";
            }))
    } else if (WhichOne == "white") {
        selectedColor = "white";
        gridItem.forEach(item => item.addEventListener("mouseover",
            function () {
                item.style.backgroundColor = "white";
            }))
    } else if (WhichOne == "green") {
        selectedColor = "green";
        gridItem.forEach(item => item.addEventListener("mouseover",
            function () {
                item.style.backgroundColor = "green";
            }))
    } else if (WhichOne == "multi-color") {
        selectedColor = "multi-color";
        randomColor()
    } else if(WhichOne == "pick"){
        selectedColor = pick.value;
        gridItem.forEach(item => item.addEventListener("mouseover",
            function () {
                item.style.backgroundColor = `${pick.value}`;
            }))
    }
}

function randomColor() {
    gridItem.forEach(item => item.addEventListener("mouseover", () => {
        for (let i = 1; i < gridItem.length; i++) {
            const red = Math.floor(Math.random() * 256)
            const green = Math.floor(Math.random() * 256)
            const blue = Math.floor(Math.random() * 256)
            item.style.backgroundColor = `rgb(${red},${green},${blue})`;
        }}))
}

function backgroundColor(option) {
    if (option == "red-bkg") {
        container.style.backgroundColor = "red"
    } else if (option == "black-bkg") {
        container.style.backgroundColor = "black"
    } else if (option == "green-bkg") {
        container.style.backgroundColor = "green"
    }
}

pickBkg.addEventListener("change", ()=>{
    container.style.backgroundColor = `${pickBkg.value}`
    backgroundSvg.style.fill = `${pickBkg.value}`
})

function eraser() {
    gridItem.forEach(item => item.addEventListener("mouseover", () => {
        item.style.backgroundColor = `${container.style.backgroundColor}`
    }))
}

function clearAll() {
    gridItem.forEach(item => {
        item.style.backgroundColor = "";
    })
}
pick.addEventListener("change" , ()=>{
   markerSvg.style.fill = `${pick.value}`
})

function setDefault() {
    btn.value = 16;
    output.value = btn.value + " x " + btn.value;
    pick.value = "#000000";
    pickBkg.value = "#aaaaaa";
    markerSvg.style.fill = `${pick.value}`;
    backgroundSvg.style.fill = `${pickBkg.value}`;
}
document.addEventListener("DOMContentLoaded", () => {
    setDefault();
    colors();
})

