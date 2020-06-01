//creating variables for recipeCount and recipeArray
var recipeCount = 0;
var recipeArray = [];
//creating variable for localStorageRecipeHistoryArray
var localStorageRecipeHistoryArray = localStorage.getItem("recipelist");
console.log(localStorageRecipeHistoryArray);
//creating variable for recipeHistoryArray
var recipeHistoryArray = [];
//parsing localStorage for recipe and setting it to recipeHistoryArray
recipeHistoryArray = JSON.parse(localStorageRecipeHistoryArray);
//if result is not null then run for loop
if (
  localStorageRecipeHistoryArray !== null &&
  localStorageRecipeHistoryArray !== "null" &&
  localStorageRecipeHistoryArray !== undefined
) {
  //looping through recipeHistoryArray
  for (var b = 0; b < recipeHistoryArray.length; b++) {
    //calling on createRecipeHistory and getting the id and text for that particular item
    createRecipeHistory(recipeHistoryArray[b].id, recipeHistoryArray[b].text);
    //setting recipeCount equal to the id number
    recipeCount = parseInt(recipeHistoryArray[b].id) + 1;
  }
  //else stating to reset recipeHistoryArray to empty if it returns null
} else {
  recipeHistoryArray = [];
}

//Fare Search
var randomId = 0;
//creating fareSearch funtion
function fareSearch() {
  //calling pickFare function
  pickFare();
  //creating a variable for the first parameters of the fare search
  var settings1 = {
    url:
      "https://api.spoonacular.com/recipes/" +
      randomId +
      "/information?cuisine=" +
      fare +
      "&offset=50&number=1&instructionsRequired=true&includeNutrition=true&apiKey=437bf2c82535454aa99e2de3a824e4ac",
    method: "GET",
    timeout: 0,
    headers: {},
  };
  //ajax for first search parameter
  $.ajax(settings1).then(function (response) {
    //setting attr src to get the image form api and display it at #farePic
    $("#farePic").attr("src", response.image);
    //setting the text of the title from the api to display at #recipe-title
    $("#recipe-title").text(response.title);
    //setting the code and text from the api to show at #recipe
    $("#recipe").html(response.summary);
    //setting the recipe title to show in localStorage
    localStorage.setItem("recipe", JSON.stringify(response.title));
    //calling the createRecipeHistory function
    createRecipeHistory(recipeCount, recipeTitle);
    //creating getFare function
    function getFare() {
      $("#recipe-title").attr("src", "url(" + response + ")");
    }
    getFare();
  });
}
//creating getRandomFare function
function getRandomFare() {
  //calling on pickFare function
  pickFare();
  //creating a variable for the second parameters of the fare search
  var settings2 = {
    url:
      "https://api.spoonacular.com/recipes/search?diet=" +
      fare +
      "&offset=50&number=1&instructionsRequired=true&apiKey=437bf2c82535454aa99e2de3a824e4ac",
    method: "GET",
    timeout: 0,
    headers: {},
  };
  console.log(settings2.url);
  //ajax for second search parameter
  $.ajax(settings2).then(function (response) {
    //loop through results
    for (var m = 0; m < response.results.length; m++) {
      var results = response.results[m];
      //if results are not equal to null then push results to recipeArray
      if (
        !(
          results.title === undefined ||
          results.title === null ||
          results.title === "null"
        )
      ) {
        recipeArray.push(results);
      }
      //set randomId equal to the id (integer) from the recipe in api
      randomId = response.results[m].id;
      console.log(settings2.url);
      //calling on fareSearch function
      fareSearch();
    }
  });
}

//Fare Types
var fare;
var Italian = "italian";
var American = "American";
var Mexican = "Mexican";
var Indian = "Indian";
var Cajun = "Cajun";
var Greek = "Greek";
var dietChoiceArray = [];
var GlutenFree = "Gluten Free";
var Vegan = "Vegan";
//create function pickFare and make if statements to grab the value from user's selection to make "fare" equal to that choice
function pickFare() {
  if ($("#selectFare").val() === "Italian") {
    fare = Italian;
  }
  if ($("#selectFare").val() === "American") {
    fare = American;
  }
  if ($("#selectFare").val() === "Mexican") {
    fare = Mexican;
  }
  if ($("#selectFare").val() === "Indian") {
    fare = Indian;
  }
  if ($("#selectFare").val() === "Vegan") {
    fare = Vegan;
  }
  if ($("#selectFare").val() === "Cajun") {
    fare = Cajun;
  }
  if ($("#selectFare").val() === "Greek") {
    fare = Greek;
  }
  if ($("#selectFare").val() === "GlutenFree") {
    fare = GlutenFree;
  }
}
//creating variable for movieCount set to 0
var movieCount = 0;
//getting the movielist item from localStorage and setting it equal to localStorageMovieHistoryArray
var localStorageMovieHistoryArray = localStorage.getItem("movielist");
console.log(localStorageMovieHistoryArray);
//creating empty array for movieHistoryArray
var movieHistoryArray = [];
//setting movieHistoryArray equal to the parsed localStorageMovieHistoryArray
movieHistoryArray = JSON.parse(localStorageMovieHistoryArray);
//if the result is null run loop through movieHistoryArray to get id and text && set movieCount to that id number
if (
  localStorageMovieHistoryArray !== null &&
  localStorageMovieHistoryArray !== "null" &&
  localStorageMovieHistoryArray !== undefined
) {
  for (var a = 0; a < movieHistoryArray.length; a++) {
    createMovieHistory(movieHistoryArray[a].id, movieHistoryArray[a].text);
    movieCount = parseInt(movieHistoryArray[a].id) + 1;
  }
  //if the result is null reset movieHistoryArray to empty
} else {
  movieHistoryArray = [];
}
//create an empty array for movies coming from api to reside
var movieArray = [];
//create all of the movie genres with their respective ids for the api
var action = 28;
var comedy = 35;
var documentary = 99;
var drama = 18;
var family = 10751;
var horror = 27;
var scifi = 878;
//setting genre equal to 0
var genre = 0;
//creating pickGenre function to get the value of the user's selction and setting it equal to the genre
function pickGenre() {
  if ($("#select").val() === "action") {
    genre = action;
  }
  if ($("#select").val() === "comedy") {
    genre = comedy;
  }
  if ($("#select").val() === "documentary") {
    genre = documentary;
  }
  if ($("#select").val() === "drama") {
    genre = drama;
  }
  if ($("#select").val() === "family") {
    genre = family;
  }
  if ($("#select").val() === "horror") {
    genre = horror;
  }
  if ($("#select").val() === "scifi") {
    genre = scifi;
  }
}
//creating movieSearch funtion that will search the api
function movieSearch() {
  //calling pickGenre function that will hold the correct genre id for the api
  pickGenre();
  //creating queryURL that will search the api
  var queryURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=ff46f8ea1d82a3eb64afbd0bbaf6cef5&include_adult=false&with_genres=" +
    genre;
  console.log(genre);
  //ajax for movie api
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //loop through the results
    for (var i = 0; i < response.results.length; i++) {
      //create results variable to be equal to the results from the api
      var results = response.results[i];
      //if results.title is not null the push that result to the movieArray
      if (
        !(
          results.title === undefined ||
          results.title === null ||
          results.title === "null"
        )
      ) {
        movieArray.push(results);
      }
    }
    //creating getMovie function that will loop through the movieArray and return a single random movie
    function getMovie() {
      //get random movie from the movieArray
      var randomMovie =
        movieArray[Math.floor(Math.random() * movieArray.length)];
      console.log(randomMovie.poster_path);
      //set attr src to display the poster to #moviePoster
      $("#moviePoster").attr(
        "src",
        "https://image.tmdb.org/t/p/original/" + randomMovie.poster_path
      );
      console.log(JSON.stringify(randomMovie.title));
      //pushing text of movie title to display at #title
      $("#title").text(randomMovie.title);
      console.log(randomMovie.release_date);
      //pushing text of release date to display at #releaseDate
      $("#releaseDate").text(randomMovie.release_date);
      console.log(randomMovie.overview);
      //pushing text of synopsis to display at #synopsis
      $("#synopsis").text(randomMovie.overview);
      console.log("Genre => " + randomMovie.genre_ids);
      //set movie title to local storage
      localStorage.setItem("movie", JSON.stringify(randomMovie.title));
      //calling on createMovieHistory function
      createMovieHistory(movieCount, movieTitle);
    }
    //calling on getMovie function
    getMovie();
  });
}
//creating the createRecipeHistory function which will push and display all of the searched recipes and display them on the page
function createRecipeHistory(id, text) {
  //creating dynamic <p>
  var recipeHistory = $("<p>");
  //setting font size to dynamic <p>
  recipeHistory.css({
    "font-size": "14px",
  });
  //setting attr id
  recipeHistory.attr("id", "recipe-" + id);
  //display the text
  recipeHistory.html(text);
  //dynamically creating delete button for each item in history
  var delRecipe = $("<button>");
  delRecipe.attr("data-recipe-id", id);
  delRecipe.addClass("checkbox");
  delRecipe.html("X");
  //if result is not null append dynamic <p> and delete button to display at #fareHistoryText
  if (!(text === undefined || text === null || text === "null")) {
    recipeHistory.append(delRecipe);
  }
  $("#fareHistoryText").append(recipeHistory);
}
//creating function createMovieHistory that will push and display all of the searched movies and display them on the page
function createMovieHistory(id, text) {
  //creating dynamic <p>
  var movieHistory = $("<p>");
  //setting font size to dynamic <p>
  movieHistory.css({
    "font-size": "14px",
  });
  //setting attr id
  movieHistory.attr("id", "movie-" + id);
  //display the text
  movieHistory.html(text);
  //dynamically creating delete button for each item in history
  var delMovie = $("<button>");
  delMovie.attr("data-movie-id", id);
  delMovie.addClass("checkbox");
  delMovie.html("X");
  //if result is not null append dynamic <p> and delete button to display at #movieHistoryText
  if (!(text === undefined || text === null || text === "null")) {
    movieHistory.append(delMovie);
  }
  $("#movieHistoryText").append(movieHistory);
}
//creating the onclick for the result button
$("#result").on("click", function (event) {
  event.preventDefault();
  //call movieSearch function
  movieSearch();

  console.log("movieTitle: ");
  //get movie from localStorage and set it equal to movieTitle
  var movieTitle = localStorage.getItem("movie");
  //call the getRandomFare function
  getRandomFare();
  //get recipe from localStorage and set it equal to recipeTitle
  var recipeTitle = localStorage.getItem("recipe");
  console.log("random id: " + randomId);
  //create the recipeObject with recipeCount and recipeTitle set to id and text respectively
  var recipeObject = {
    id: recipeCount,
    text: recipeTitle,
  };
  //increase recipeCount by one
  recipeCount++;
  //call createRecipeHisstory function
  createRecipeHistory(recipeCount, recipeTitle);
  //push the recipeObject to the recipeHistoryArray
  recipeHistoryArray.push(recipeObject);
  //stringify the recipeHistoryArray
  var stringVersionRecipes = JSON.stringify(recipeHistoryArray);
  //set stringVersionRecipes to recipelist to localStorage
  localStorage.setItem("recipelist", stringVersionRecipes);
  //create movieObject with movieCount and movieTitle set to id and text respectively
  var movieObject = {
    id: movieCount,
    text: movieTitle,
  };
  //increase movieCount by one
  movieCount++;
  //call createMovieHistory function
  createMovieHistory(movieCount, movieTitle);
  //push the movieObject to the movieHistoryArray
  movieHistoryArray.push(movieObject);
  //stringify the movieHistoryArray
  var stringVersionMovies = JSON.stringify(movieHistoryArray);
  //set stringVersionMovies to movielist to localStorage
  localStorage.setItem("movielist", stringVersionMovies);
});
//creating onclick for the delete button next to each item in movie and fare history
$(document.body).on("click", ".checkbox", function () {
  //getting data movie-id and setting it equal to movieNumber
  var movieNumber = $(this).data("movie-id");
  //deletes the selection
  $("#movie-" + movieNumber).empty();
  //clears from localStorage
  localStorage.clear();
  //creating newMovieHistoryArray that is empty
  var newMovieHistoryArray = [];
  //loop through the movieHistoryArray and if the id is not equal to movieNumber then push movieHistoryArray item to newMovieHistoryArray
  for (var i = 0; i < movieHistoryArray.length; i++) {
    if (movieHistoryArray[i].id != movieNumber) {
      newMovieHistoryArray.push(movieHistoryArray[i]);
    }
  }
  //setting movieHistoryArray equal to newMovieHistoryArray
  movieHistoryArray = newMovieHistoryArray;
  //stringifying the movieHistoryArray and setting it equal to stringVersionMovies
  var stringVersionMovies = JSON.stringify(movieHistoryArray);
  //setting stringVersionMovies to movielist in the localStorage
  localStorage.setItem("movielist", stringVersionMovies);
});

$(movieHistory).on("click", function () { });

$(movieHistory).on("click", function () { });

