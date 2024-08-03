let container = document.querySelector(".container");

for(let i =0;i<30;i++){
    let div = document.createElement("div");
    div.className = 'color_box';
    container.appendChild(div);
}

function randomColor(){
    let chars = "0123456789abcdef";
    let color = "#";
    for(let i =0;i<6;i++){
        let randomNum = Math.floor(Math.random()*chars.length);
        console.log(chars[randomNum]);
        color += chars[randomNum];  
    }

    return color;
}

let colorList = document.querySelectorAll(".color_box");

function generateColors(){
    colorList.forEach(ele => {
        let randomOut= randomColor();
        ele.style.backgroundColor = randomOut;
        ele.innerText = randomOut;
    });
      
}

window.addEventListener("load",generateColors());