console.log ('Three constructors');



// #1
function timeMachine(year, fluxCapacitor){
	this.year = year || "1981";
	this.fluxCapacitor = false;

	this.libyanUranium = function(){
		this.fluxCapacitor = true;
	}

};

var delorean = new timeMachine(false)

// #2
function bonnarooShow (stage, day, genre){
	this.stage = stage || "Check the schedule";
	this.day = day	|| "Check the schedule";
	this.genre = genre || "good music";
};

var Radiohead = new bonnarooShow ('What', 'Friday')
var AltJ = new bonnarooShow('This Tent', 'Saturday')
var BeachBoys = new bonnarooShow()


// #3

function Sandwich(bread, cheese, vegetarian){
	this.bread = bread || "white";
	this.cheese = cheese || "American";
	this.vegetarian = vegetarian || true;

	this.addMeat = function(){
		this.vegetarian = false;
	}
};

var GrilledCheese = new Sandwich('wheat', 'swiss')
var Ham = new Sandwich('white', 'cheddar', '?')
var Turkey = new Sandwich('', '', '?');





