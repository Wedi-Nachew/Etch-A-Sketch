const container = document.querySelector("#container");

function grids() {
    for(let i=1; i <= (16*16); i++){
        const div = document.createElement("div")
        container.appendChild(div).classList.add("grid-item")
   }
}
grids()

