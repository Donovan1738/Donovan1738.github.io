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
    let section1 = document.createElement("section");
    let div1 = document.createElement("div");

    section1.classList.add("remarkable3");
    section1.setAttribute("id","back");
    
    let h2 = document.createElement("a");
    section1.append(h2);
    h2.href = pro.a; 
    h2.classList.add("link");

    let h8 = document.createElement("img");
    h8.src = pro.img;
    h8.classList.add("pic");
    h2.append(h8);

    let h4 = document.createElement("p");
    h4.innerText = pro.title;
    h4.classList.add("new");
    div1.append(h4);
    section1.append(div1);

    let h3 = document.createElement("p");
    h3.innerText = pro.description;
    h3.classList.add("p4");
    div1.append(h3);
    
    return section1;
}
window.onload = () => {
    document.getElementById("nav-toggle").onclick = showNav;
    showProject();
}