var recipeCount = 0;
var recipeArray = [];

var localStorageRecipeHistoryArray = localStorage.getItem("recipelist");
console.log(localStorageRecipeHistoryArray);
var recipeHistoryArray = [];
recipeHistoryArray = JSON.parse(localStorageRecipeHistoryArray);
if (
  localStorageRecipeHistoryArray !== null &&
  localStorageRecipeHistoryArray !== "null" &&
  localStorageRecipeHistoryArray !== undefined
) {
  for (var b = 0; b < recipeHistoryArray.length; b++) {
    createRecipeHistory(recipeHistoryArray[b].id, recipeHistoryArray[b].text);
    recipeCount = parseInt(recipeHistoryArray[b].id) + 1;
  }
} else {
  recipeHistoryArray = [];
}

var randomId = 0;
function fareSearch() {
  pickFare();
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
  $.ajax(settings1).then(function (response) {
    $("#farePic").attr("src", response.image);
    $("#recipe-title").text(response.title);
  /********************************************
  * Author: Joshua Tower                      *
  * 6/1/2020                                  *
  * Ingredients/Directions API Information    *  
  * Line 45-56                                *
  * Code Version: Final                       *
  *********************************************/
    var ingredients = response.extendedIngredients;
    var fullRecipeInfo = "<h3>Ingredients</h3> <br> <ul>";
    for (i = 0; i < ingredients.length; i++) {
      fullRecipeInfo += "<li>" + ingredients[i].originalString + "</li>";
    }
    fullRecipeInfo += "</ul> <br> <h3>Instructions</h3> <br> <ol>";
    var directions = response.analyzedInstructions[0].steps;
    for (i = 0; i < directions.length; i++) {
      fullRecipeInfo += "<li>" + directions[i].step + "</li>";
    }
    fullRecipeInfo += "</ol>";
    $("#recipe").html(fullRecipeInfo);

    localStorage.setItem("recipe", JSON.stringify(response.title));
    createRecipeHistory(recipeCount, recipeTitle);
    function getFare() {
      $("#recipe-title").attr("src", "url(" + response + ")");
    }
    getFare();
  });
}
//Diet Choice
function getRandomFare() {
  pickFare();
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
  $.ajax(settings2).then(function (response) {
    for (var m = 0; m < response.results.length; m++) {
      var results = response.results[m];
      if (
        !(
          results.title === undefined ||
          results.title === null ||
          results.title === "null"
        )
      ) {
        recipeArray.push(results);
      }
      randomId = response.results[m].id;
      console.log(settings2.url);
      fareSearch();
    }
  });
}

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

var movieCount = 0;

var localStorageMovieHistoryArray = localStorage.getItem("movielist");
console.log(localStorageMovieHistoryArray);
var movieHistoryArray = [];
movieHistoryArray = JSON.parse(localStorageMovieHistoryArray);
if (
  localStorageMovieHistoryArray !== null &&
  localStorageMovieHistoryArray !== "null" &&
  localStorageMovieHistoryArray !== undefined
) {
  for (var a = 0; a < movieHistoryArray.length; a++) {
    createMovieHistory(movieHistoryArray[a].id, movieHistoryArray[a].text);
    movieCount = parseInt(movieHistoryArray[a].id) + 1;
  }
} else {
  movieHistoryArray = [];
}

var movieArray = [];
var action = 28;
var comedy = 35;
var documentary = 99;
var drama = 18;
var family = 10751;
var horror = 27;
var scifi = 878;
var genre = 0;
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
function movieSearch() {
  pickGenre();
  var queryURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=ff46f8ea1d82a3eb64afbd0bbaf6cef5&include_adult=false&with_genres=" +
    genre;
  console.log(genre);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    for (var i = 0; i < response.results.length; i++) {
      var results = response.results[i];
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

    function getMovie() {
      var randomMovie =
        movieArray[Math.floor(Math.random() * movieArray.length)];
      console.log(randomMovie.poster_path);
      $("#moviePoster").attr(
        "src",
        "https://image.tmdb.org/t/p/original/" + randomMovie.poster_path
      );
      console.log(JSON.stringify(randomMovie.title));
      $("#title").text(randomMovie.title);
      console.log(randomMovie.release_date);
      $("#releaseDate").text(randomMovie.release_date);
      console.log(randomMovie.overview);
      $("#synopsis").text(randomMovie.overview);
      console.log("Genre => " + randomMovie.genre_ids);
      localStorage.setItem("movie", JSON.stringify(randomMovie.title));
      createMovieHistory(movieCount, movieTitle);
    }
    getMovie();
  });
}

function createRecipeHistory(id, text) {
  var recipeHistory = $("<p>");
  recipeHistory.css({
    "font-size": "14px",
  });
  recipeHistory.attr("id", "recipe-" + id);
  recipeHistory.html(text);
  var delRecipe = $("<button>");
  delRecipe.attr("data-recipe-id", id);
  delRecipe.addClass("checkbox");
  delRecipe.html("X");
  if (!(text === undefined || text === null || text === "null")) {
    recipeHistory.append(delRecipe);
  }
  $("#fareHistoryText").append(recipeHistory);
}

function createMovieHistory(id, text) {
  var movieHistory = $("<p>");
  movieHistory.css({
    "font-size": "14px",
  });
  movieHistory.attr("id", "movie-" + id);
  movieHistory.html(text);
  var delMovie = $("<button>");
  delMovie.attr("data-movie-id", id);
  delMovie.addClass("checkbox");
  delMovie.html("X");
  if (!(text === undefined || text === null || text === "null")) {
    movieHistory.append(delMovie);
  }
  $("#movieHistoryText").append(movieHistory);
}

$("#result").on("click", function (event) {
  event.preventDefault();
  movieSearch();

  console.log("movieTitle: ");
  var movieTitle = localStorage.getItem("movie");
  getRandomFare();
  var recipeTitle = localStorage.getItem("recipe");
  console.log("random id: " + randomId);

  var recipeObject = {
    id: recipeCount,
    text: recipeTitle,
  };
  recipeCount++;
  createRecipeHistory(recipeCount, recipeTitle);

  recipeHistoryArray.push(recipeObject);
  var stringVersionRecipes = JSON.stringify(recipeHistoryArray);
  localStorage.setItem("recipelist", stringVersionRecipes);

  var movieObject = {
    id: movieCount,
    text: movieTitle,
  };
  movieCount++;
  createMovieHistory(movieCount, movieTitle);

  movieHistoryArray.push(movieObject);
  var stringVersionMovies = JSON.stringify(movieHistoryArray);
  localStorage.setItem("movielist", stringVersionMovies);
});

$(document.body).on("click", ".checkbox", function () {
  var movieNumber = $(this).data("movie-id");
  $("#movie-" + movieNumber).empty();
  localStorage.clear();
  var newMovieHistoryArray = [];
  for (var i = 0; i < movieHistoryArray.length; i++) {
    if (movieHistoryArray[i].id != movieNumber) {
      newMovieHistoryArray.push(movieHistoryArray[i]);
    }
  }
  movieHistoryArray = newMovieHistoryArray;
  var stringVersionMovies = JSON.stringify(movieHistoryArray);
  localStorage.setItem("movielist", stringVersionMovies);
  var recipeNumber = $(this).data("recipe-id");
  $("#recipe-" + recipeNumber).empty();
  localStorage.clear();
  var newRecipeHistoryArray = [];
  for (var i = 0; i < recipeHistoryArray.length; i++) {
    if (recipeHistoryArray[i].id != recipeNumber) {
      newRecipeHistoryArray.push(recipeHistoryArray[i]);
    }
  }
  recipeHistoryArray = newRecipeHistoryArray;
  var stringVersionRecipes = JSON.stringify(recipeHistoryArray);
  localStorage.setItem("recipelist", stringVersionRecipes);
});