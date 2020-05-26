
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxS26xgOho5G_1W-Cc9Rwx6cmr5gNfcA0",
    authDomain: "a-new-project-a5553.firebaseapp.com",
    databaseURL: "https://a-new-project-a5553.firebaseio.com",
    projectId: "a-new-project-a5553",
    storageBucket: "a-new-project-a5553.appspot.com",
    messagingSenderId: "582759574527",
    appId: "1:582759574527:web:4a5e53e17b3e6fcb8515ca",
    measurementId: "G-KT0DPHG31D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



//Recipe Search
var settings1 = {
  async: true,
  crossDomain: true,
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?cuisine=indian&number=10&type=main%20course&query=burger",
  method: "GET",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "62afd12ed3msh967bb13d2fe4a21p1bc52fjsn999fe4d47451",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
//Get Similar Recipes
var settings2 = {
  async: true,
  crossDomain: true,
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/156992/similar",
  method: "GET",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "62afd12ed3msh967bb13d2fe4a21p1bc52fjsn999fe4d47451",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
//Get Recipe Nutrition by ID
var settings3 = {
  async: true,
  crossDomain: true,
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/visualizeNutrition",
  method: "POST",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "62afd12ed3msh967bb13d2fe4a21p1bc52fjsn999fe4d47451",
    accept: "text/html",
    "content-type": "application/x-www-form-urlencoded",
  },
  data: {
    ingredientList: "3 oz flour",
    servings: "2",
  },
};


$.ajax(settings).done(function (response) {
  console.log(response);
});

var fareArray = [];
var Italian = "Italian";
var American = "American";
var Mexican = "Mexican";
var Indian = "Indian";
var Vegan = "Vegan";
var Cajun = "Cajun";
var Mediterrean = "Mediterrean";

function pickFare() {
	if ($("#selectFare").val() === "Italian") {
	  genre = Italian;
	}
	if ($("#select").val() === "American") {
	  genre = American;
	}
	if ($("#select").val() === "Mexican") {
	  genre = Mexican;
	}
	if ($("#select").val() === "Indian") {
	  genre = Indian;
	}
	if ($("#select").val() === "Vegan") {
	  genre = Vegan;
	}
	if ($("#select").val() === "Cajun") {
	  genre = Cajun;
	}
	if ($("#select").val() === "Mediterrean") {
	  genre = Mediterrean;
	}
  }

  function fareSearch() {
	//var fare = $(this).attr("value");
	pickFare();
	var queryURL =
  "https://spoonacular.com/food-api/docs#Authentication&apiKey=c4a805b12c474690b2cb2c967cd12dff"+
	  fare;
	console.log(fare);

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
  //var genre = $(this).attr("value");
  pickGenre();
  var queryURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=ff46f8ea1d82a3eb64afbd0bbaf6cef5&include_adult=false&with_genres=" +
    genre;
  console.log(genre);

 
//test loop

for (i = 0; i < 5; i++) {
    console.log(i);
 
	}

	$.ajax({
		url: queryURL,
		method: "GET",
	  }).then(function (response) {
		for (var i = 0; i < response.results.length; i++) {
		  //console.log(response.results[i]);
		  var results = response.results[i];
		  movieArray.push(results);
		}
		//console.log(movieArray);
		function getMovie() {
		  var randomMovie =
			movieArray[Math.floor(Math.random() * movieArray.length)];
		  console.log(randomMovie.poster_path);
		  $("#moviePoster").attr(
			"src",
			"https://image.tmdb.org/t/p/original/" + randomMovie.poster_path
		  );
		  console.log(randomMovie.title);
		  $("#title").text(randomMovie.title);
		  console.log(randomMovie.release_date);
		  $("#releaseDate").text(randomMovie.release_date);
		  console.log(randomMovie.overview);
		  $("#synopsis").text(randomMovie.overview);
		}
		getMovie();
	  });
	}
	
	$("#result").on("click", function () {
	  movieSearch();
	});


	$.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    for (var i = 0; i < response.results.length; i++) {
      //console.log(response.results[i]);
      var results = response.results[i];
      movieArray.push(results);
    }
    //console.log(movieArray);
    function getMovie() {
      var randomMovie =
        movieArray[Math.floor(Math.random() * movieArray.length)];
      console.log(randomMovie.poster_path);
      $("#moviePoster").attr(
        "src",
        "https://image.tmdb.org/t/p/original/" + randomMovie.poster_path
      );
      console.log(randomMovie.title);
      $("#title").text(randomMovie.title);
      console.log(randomMovie.release_date);
      $("#releaseDate").text(randomMovie.release_date);
      console.log(randomMovie.overview);
      $("#synopsis").text(randomMovie.overview);
    }
    getMovie();
  });
}

$("#result").on("click", function () {
  movieSearch();
});
