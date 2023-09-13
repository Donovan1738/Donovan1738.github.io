const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "Triple Dang It Gavin";
    helloP.classList.add("special");
}

const showSpider = () => {
    document.getElementById("spider").classList.remove("hide");
}

const hideSpider = () => {
    document.getElementById("spider").classList.add("hide");
}

// window.onload = () => {
//     const clickButton = document.getElementById("button-click");
//     clickButton.onclick = changeText;
// }


window.onload = () => {
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showSpider;
    document.getElementById("button-hide").onclick = hideSpider;
}