const showSpider = () => {
    document.getElementById("spider").classList.remove("hide");
}

const hideSpider = () => {
    document.getElementById("spider").classList.add("hide");
}

const animates = () => {
    document.getElementById("heart").classList.add("move-heart");
}

const displayName = () => {
    const productName = document.getElementById("txt-product-name").value;
    const comment = document.getElementById("txt-comment-name").value;
    const rating = document.getElementById("txt-rating").value;
    const userName = document.getElementById("txt-user-name").value;
    const messageP = document.getElementById("message");
 
    messageP.innerHTML = (productName + "<br>" +"<br>"+ rating + "/5 stars" + " " + comment  +"<br>"+ "<br>" + " by " + userName);
}

window.onload = () => {
    document.getElementById("button-show").onclick = showSpider;
    document.getElementById("button-hide").onclick = hideSpider;
    document.getElementById("button-dance").onclick = animates;
    document.getElementById("button-show-comment").onclick = displayName;
}