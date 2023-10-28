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
    let movies = await getProject();
    let movieSection = document.getElementById("yo");

    movies.forEach((movie) => {
        movieSection.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    // let section = document.createElement("section");
    let div = document.createElement("div");

    let h8 = document.createElement("img");
    // let url = "https://portiaportia.github.io/json/";
    h8.src = movie.img;
    section.append(h8);

    // section.append(div);
    // let h2 = document.createElement("h2");
    // h2.innerText = movie.title;
    // div.append(h2);

    // let h3 = document.createElement("p");
    // h3.innerText = "Director: " + movie.director;
    // div.append(h3);

    // let h4 = document.createElement("p");
    // h4.innerText = "Actors: " + movie.actors;
    // div.append(h4);
    
    // let h5 = document.createElement("p");
    // h5.innerText = "Year Released: " + movie.year;
    // div.append(h5);

    // let h6 = document.createElement("p");
    // h6.innerText = "Genres: " +  movie.genres;
    // div.append(h6);

    // let h7 = document.createElement("p");
    // h7.innerText = movie.description;
    // div.append(h7);
    
    return section;
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = showNav;
    showProject();
}