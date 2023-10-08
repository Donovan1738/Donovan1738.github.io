const showNav = () => {
    const nav = document.getElementById("hi").classList.toggle("hide");
    const nav1 = document.getElementById("hi2").classList.toggle("hide");
    const nav2 = document.getElementById("hi3").classList.toggle("hide");
    const nav3 = document.getElementById("hi4").classList.toggle("hide");
    const nav4 = document.getElementById("hi5").classList.toggle("hide"); 
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = showNav;
}