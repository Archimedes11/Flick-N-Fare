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

