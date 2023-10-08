const showNav = () => {
    const nav = document.getElementById("hi").classList.toggle("hide");
    const nav1 = document.getElementById("hi2").classList.toggle("hide");
    const nav2 = document.getElementById("hi3").classList.toggle("hide");
    const nav3 = document.getElementById("hi4").classList.toggle("hide");
    const nav4 = document.getElementById("hi5").classList.toggle("hide");  
}

const displayReview = () => {
    const resultDiv = document.getElementById("reviews");
    const name = document.getElementById("txt-name").value;
    const product = document.getElementById("txt-product").value;
    const review = document.getElementById("txt-review").value;

    const section = document.createElement("section");
    resultDiv.append(section);
    const h2 = document.createElement("h2");
    section.append(h2);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p = document.createElement("p");
    section.append(p)

    h2.textContent = `Reviewer: ${name}`;
    h3.textContent = `Product: ${product}`
    p.textContent = `${review}`; 
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = showNav;
    document.getElementById("button-review").onclick = displayReview;
}