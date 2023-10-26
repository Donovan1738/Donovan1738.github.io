const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json"

    try {
        const response = await fetch(url);
        return await response.json();
    }   catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    let movies = await getMovies();
    let movieSection = document.getElementById("movie-section");

    movies.forEach((movie) => {
        movieSection.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    let section = document.createElement("section");
    let div = document.createElement("div");

    let h8 = document.createElement("img");
    let url = "https://portiaportia.github.io/json/";
    h8.src = url + movie.img;
    section.append(h8);
    h8.classList.add("zoom");

    section.append(div);
    let h2 = document.createElement("h2");
    h2.innerText = movie.title;
    div.append(h2);

    let h3 = document.createElement("p");
    h3.innerText = "Director: " + movie.director;
    div.append(h3);

    let h4 = document.createElement("p");
    h4.innerText = "Actors: " + movie.actors;
    div.append(h4);
    
    let h5 = document.createElement("p");
    h5.innerText = "Year Released: " + movie.year;
    div.append(h5);

    let h6 = document.createElement("p");
    h6.innerText = "Genres: " +  movie.genres;
    div.append(h6);

    let h7 = document.createElement("p");
    h7.innerText = movie.description;
    div.append(h7);
    
    return section;
}


window.onload = () => showMovies();