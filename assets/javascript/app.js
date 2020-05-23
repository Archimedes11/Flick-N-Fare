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
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?cuisine=indian&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%252C%20gluten&number=10&offset=0&type=main%20course&query=burger",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "62afd12ed3msh967bb13d2fe4a21p1bc52fjsn999fe4d47451"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
	//Get Similar Recipes
var settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/156992/similar",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "62afd12ed3msh967bb13d2fe4a21p1bc52fjsn999fe4d47451"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
	//Get Recipe Nutrition by ID
var settings3 = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/visualizeNutrition",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "62afd12ed3msh967bb13d2fe4a21p1bc52fjsn999fe4d47451",
		"accept": "text/html",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
		"ingredientList": "3 oz flour",
		"servings": "2"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});


//test loop

for (i = 0; i < 5; i++) {
    console.log(i);
  }