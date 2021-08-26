const form = document.getElementById("movie-form");
const titleElement = document.querySelector('#title');
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll(".card-body")[1]; //We have 2 card-body class, we want second one
const clear = document.getElementById("clear-movies");

//Create UI Object
const ui = new UI();

//Create Storage Object
const storage = new Storage();

//Load all event

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded",function(){
        let movies = storage.getMoviesFromStorage();
        ui.loadAllMovies(movies);
    });

    cardBody.addEventListener("click",deleteMovie);
    clear.addEventListener("click",clearAllMovies);
}

function addMovie(e){
    const title =titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //error
        ui.displayMessages("Please fill out all required fields","danger")
    } else {
        //New Movie
        const newMovie = new Movie(title,director,url);
        ui.addMovieToUI(newMovie); // Add movie to UI
        storage.addMovieToStorage(newMovie); // Add movie to Browser's Local Storage
        ui.displayMessages("Movie successfully added","success")
    }

    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deleteMovie(e){
    if(e.target.id === "delete-movie"){
        ui.deleteMovieFromUI(e.target);
        storage.deleteMovieFromStorage(e.target.previousElementSibling.previousElementSibling.textContent);
        //We got the name of the movie in the top line

        ui.displayMessages("Successfully deleted","success");
    }
}

function clearAllMovies(){
    if(confirm("Are you sure ?")){
        ui.clearAllMoviesFromUI();
        storage.clearAllMoviesFromStorage();
    }
}