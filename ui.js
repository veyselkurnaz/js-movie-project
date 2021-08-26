function UI() {

}

UI.prototype.addMovieToUI = function (newMovie) {

    /*
     <!-- 
     <tr>
     <td><img src="" class="img-fluid img-thumbnail"></td>
     <td></td>
     <td></td>
     <td><a href="#" id = "delete-movie" class = "btn btn-danger">moviei Sil</a></td>
     </tr> -->
     <!-- <tr>
     <td><img src="" class="img-fluid img-thumbnail"></td>
     <td></td>
     <td></td>
     <td><a href="#" id = "delete-movie" class = "btn btn-danger">moviei Sil</a></td>
     </tr> -->
     */

     const movieList = document.getElementById("movies");
     movieList.innerHTML +=  `

     <tr>
     <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
     <td>${newMovie.title}</td>
     <td>${newMovie.director}</td>
     <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
     </tr> 

     `; //Template Literals
}

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value ="";
    element2.value="";
    element3.value="";
}

UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelector(".card-body");
    
    //Creating alert div
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 5000);
}

UI.prototype.loadAllMovies = function(movies){
    const movieList = document.getElementById("movies");
    
    movies.forEach(function(movie){
        movieList.innerHTML += `
        
        <tr>
        <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
        <td>${movie.title}</td>
        <td>${movie.director}</td>
        <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
        </tr>

        `; // Template Literals
    });
}

UI.prototype.deleteMovieFromUI = function(element){
    element.parentElement.parentElement.remove(); //The element from the function is <a>. We can get the <tr> element after going to the top twice.
}

UI.prototype.clearAllMoviesFromUI = function(){
    const movieList = document.getElementById("movies");
    
    /*
    movieList.innerHTML = ""; This can work but is slower
    */

    while(movieList.firstElementChild !== null){ // as long as the child exists
        movieList.firstElementChild.remove();
    }
}