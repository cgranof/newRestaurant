/////////////////////
// FOODITEM CONSTRUCTOR
/////////////////////

var FoodItem = function(name, calories, vegan, glutenfree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenfree = glutenfree;

}

FoodItem.prototype.toString = function() {
	var str = this.name + ", " + this.calories + ", " + this.vegan + ", " + this.glutenfree;
	return str; 
}

//testing
var fries = new FoodItem("fries", 300, false, true);
var burger = new FoodItem("burger", 500, false, true);
var sidesalad = new FoodItem("sidesalad", 200, true, true);
var trufflefries = new FoodItem("truffle fries", 350, false, true);
var	milkshake = new FoodItem("milkshake", 400, false, true);
var bakedpotato = new FoodItem("baked potato", 200, true, true);
var bocaburger = new FoodItem("bocaburger", 300, true, false);


////////////////////////
// DRINK CONSTRUCTOR //
//////////////////////
var Drink = function(name, description, price) {
	this.name = name;
	this.description = description;
	this.price = price;
}


Drink.prototype.toString = function() {
	var str = this.name + ", " + this.description + ", " + this.price;
	return str;
}

//testing
var icedtea	= new Drink("Iced Tea", "Iced unsweetened black tea" , '$2.00');
var soda = new Drink("Soda", "Carbonated beverage", '$2.00');
var milkshake = new Drink("milkshake", "chocolate milkshake", "$4.00");
var adultMilkshake	= new Drink("Adult milkshake", "Chocolate milkshake with booze", "$8.00");

console.log(icedtea);


////////////////////////
// PLATE CONSTRUCTOR //
//////////////////////
var Plate = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

Plate.prototype.toString = function(){
	var str = this.name + ", " + this.description + ", " + this.price + ", " + this.ingredients;
	return str;
 }


////////////////////////
// ORDER CONSTRUCTOR //
//////////////////////
var Order = function(plates) {
	this.plates = plates;
}

Order.prototype.toString = function(){
	var str = this.plates;
	return str;
}



///////////////////////
// MENU CONSTRUCTOR //
/////////////////////
var Menu = function(plates){
	this.plates = plates;
}

Menu.prototype.toString = function(){
	var str = this.plates;
	return str;
}



/////////////////////////////
// RESTAURANT CONSTRUCTOR //
///////////////////////////
var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
}


Restaurant.prototype.toString = function(){
	var str = this.name + ", " + this.description + ", " + this.menu;
	return str;
}



///////////////////////////
// CUSTOMER CONSTRUCTOR //
/////////////////////////
var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}

Customer.prototype.toString = function(){
	var str = dietaryPreference
}

$(document).on('ready', function() {
  
});