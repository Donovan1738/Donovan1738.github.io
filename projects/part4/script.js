const showNav = () => {
    const nav = document.getElementById("hi").classList.toggle("hide");
    const nav1 = document.getElementById("hi2").classList.toggle("hide");
    const nav2 = document.getElementById("hi3").classList.toggle("hide");
    const nav3 = document.getElementById("hi4").classList.toggle("hide");
    const nav4 = document.getElementById("hi5").classList.toggle("hide");
}

const getProject = async () => {
    const url = "https://donovan1738.github.io/projects/part4/project.json"

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
    let div1 = document.getElementById("main-nav");
    let div = document.getElementById("yo");
    // let li = document.createElement("li");
    // li.classList.add("hide");

    // div1.append(li);

    // let h4 = document.createElement("a");
    // h4.href= pro.link;
    // li.append(h4);


    let h8 = document.createElement("img");
    h8.src = pro.img;
    h8.classList.add("pic");
    div.append(h8);

    let h2 = document.createElement("p");
    h2.innerText = pro.title;
    h2.classList.add("over");
    div.append(h2);

    let h3 = document.createElement("p");
    h3.innerText = pro.description;
    h3.classList.add("p1");
    div.append(h3);
    
    return div;
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = showNav;
    showProject();
}