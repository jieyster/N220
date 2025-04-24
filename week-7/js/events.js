const h1Ref = document.querySelector("h1");
const nameRef = document.querySelector("#name");
const sizeRef = document.querySelector("#size")

function changeH1Style() {
    if (h1Ref.style.backgroundColor !== "red") {
        h1Ref.style.backgroundColor = "red";
    } else {
    h1Ref.style.backgroundColor = "white";
    }
}

function changeH1Color(e) {
    console.log(e.target.value);
    //target is the input, value is what was typed in
    h1Ref.style.color = e.target.value
}

function changeH1Size(e) {
    const fontSize = Number(e.target.value);
    if(fontSize >= 8) {
    h1Ref.style.fontSize = fontSize + "px";
    } else {
        e.target.value = 8;
        h1Ref.style.fontSize = "8px";
    }
}

function cleanUpH1Size(e) {
    const fontSize = Number(e.target.value);
    if(fontSize < 8) {
    e.target.value = 8;
    
    }
}




sizeRef.oninput = changeH1Size;

h1Ref.onclick = changeH1Style;

nameRef.onchange = changeH1Color;