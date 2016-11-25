"use strict";
var GALAXY = (function (Universe) {

  Universe.Robot = function () {
	this.type = "machine";
	this.health = null;
};

  Universe.Humanoid = function () {
	this.purpose = "diplomacy";
	this.health = null;
};

  Universe.Mech = function () {
	this.purpose = "nuclear";
	this.property = "mecha";
	this.health = null;
};

  Universe.Swarm = function () {
	this.purpose = "autonomous warfare";
	this.property = "drone";
	this.health = null;
};

 Universe.Grayfox = function () {
 	this.health = this.health();
 	this.attack = this.attack();
};

Universe.Terminator =  function () {
	this.health = this.health();
	this.attack = this.attack();
};

Universe.Rex = function () {
	this.health = this.health();
	this.attack = this.attack();
};

Universe.Evangelion = function () {
	this.attack = this.attack();
	this.health = this.health();
};

Universe.Ants = function () {
	this.attack = this.attack();
	this.health = this.health();
};

Universe.Swarmbots = function () {
	this.attack = this.attack();
	this.health = this.health();
};

 Universe.Humanoid.prototype = new Universe.Robot();
 Universe.Mech.prototype = new Universe.Robot();
  Universe.Swarm.prototype = new Universe.Robot();

Universe.Grayfox.prototype = new Universe.Humanoid();
Universe.Terminator.prototype = new Universe.Humanoid();

 Universe.Rex.prototype = new Universe.Mech();
 Universe.Evangelion.prototype = new Universe.Mech();

 Universe.Ants.prototype = new Universe.Swarm();
 Universe.Swarmbots.prototype =  new Universe.Swarm();

Universe.Grayfox.prototype.attack = function(min, max) {
	 min = 20;
	 max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;


};

Universe.Grayfox.prototype.health = function (min, max) {
	 min = 50;
     max = 100;
	return Math.floor(Math.random(min, max) * (max - min + 1)) + min;
};

Universe.Terminator.prototype.attack = function(min, max) {
	 min = 20;
	 max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;


};

Universe.Terminator.prototype.health = function (min, max) {
	  min = 50;
     max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};


//mechs

Universe.Rex.prototype.attack = function(min, max) {
	 min = 50;
	 max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;


};

Universe.Rex.prototype.health = function (min, max) {
	 min = 70;
     max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

Universe.Evangelion.prototype.attack = function(min, max) {
	 min = 60;
	 max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;


};

Universe.Evangelion.prototype.health = function (min,  max) {
	 min = 80;
     max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//swarms

Universe.Ants.prototype.attack = function(min, max, multiplier) {
	 min = 1;
	 max = 10;
	return Math.floor((Math.random() * (max - min + 1)) + min) * 7 ;


};


Universe.Ants.prototype.health = function (min, max) {
	 min = 25;
     max = 120;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

Universe.Swarmbots.prototype.attack = function(min, max) {
	 min = 20;
	 max = 100;
	return Math.floor((Math.random() * (max - min + 1)) + min) * 7 ;


};

Universe.Swarmbots.prototype.health = function (min, max) {
	 min = 50;
     max = 100;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};


return Universe;
}) ({} || GALAXY);

// let  yup = new Swarmbots()
// let yeah = new GALAXY.Grayfox();
let ok = new GALAXY.Grayfox();


