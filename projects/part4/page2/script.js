const showNav = () => {
    const nav = document.getElementById("hi").classList.toggle("hide");
    const nav1 = document.getElementById("hi2").classList.toggle("hide");
    const nav2 = document.getElementById("hi3").classList.toggle("hide");
    const nav3 = document.getElementById("hi4").classList.toggle("hide");
    const nav4 = document.getElementById("hi5").classList.toggle("hide");
}

const getProject = async () => {
    const url = "https://donovan1738.github.io/projects/part4/page2/project.json"

    try {
        const response = await fetch(url);
        return await response.json();
    }   catch (error) {
        console.log(error);
    }
};

const showProject = async () => {
    let pros = await getProject();
    let proSection = document.getElementById("yo");

    pros.forEach((pro) => {
        proSection.append(getProItem(pro));
    });
};

const getProItem = (pro) => {
    let div = document.getElementById("yo");

    
    let h2 = document.createElement("a");
    div.append(h2);
    h2.href = pro.a;
    h2.classList.add("link");
    a.append(h2);

    let h8 = document.createElement("img");
    h8.src = pro.img;
    h8.classList.add("pic");
    a.append(h8);


    let h3 = document.createElement("p");
    h3.innerText = pro.description;
    h3.classList.add("p1");
    a.append(h3);
    
    return div;
}
window.onload = () => {
    document.getElementById("nav-toggle").onclick = showNav;
    showProject();
}