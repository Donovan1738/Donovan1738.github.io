const animates = () => {
    //document.getElementById("square").classList.add("move-square");

    const square = document.getElementById("square");
    const button = document.getElementById("button-animate");

    //Is it currently animating 
    if(square.classList.contains("move-square")) {
        square.classList.remove("move-square");
        button.innerHTML = "Start"
    } else {
        square.classList.add("move-square");
        button.innerHTML = "Stop";
    }
}


window.onload = () => {
    document.getElementById("button-animate").onclick = animates;
}