'use strict';

//product constructor
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.totalShown = 0;
  this.clicks = 0;
  this.justShown = false;
}

//generate random integer number function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var bag = new Product('bag', './img/bag.jpg');
var banana = new Product('banana', './img/banana.jpg');
var bathroom = new Product('bathroom', './img/bathroom.jpg');
var boots = new Product('boots', './img/boots.jpg');
var breakfast = new Product('breakfast', './img/breakfast.jpg');
var bubblegum = new Product('bubblegum', './img/bubblegum.jpg');
var chair = new Product('chair', './img/chair.jpg');
var cthulhu = new Product('cthulhu', './img/cthulhu.jpg');
var dogDuck = new Product('dog duck', './img/dog-duck');
var dragon = new Product('dragon', './img/dragon.jpg');
var pen = new Product('pen', './img/pen.jpg');
var petSweep = new Product('pet sweep', './img/pet-sweep.jpg');
var scissors = new Product('scissors', './img/scissors.jpg');
var shark = new Product('shark', './img/shark.jpg');
var sweep = new Product('sweep', './img/sweep.png');
var tauntaun = new Product('tauntaun', './img/tauntaun.jpg');
var unicorn = new Product('unicorn', './img/unicorn.jpg');
var usb = new Product('usb', './img/usb.gif');
var waterCan = new Product('water can', './img/water-can.jpg');
var wineGlass = new Product('wine glass', './img/wine-glass.jpg');

var arrOfProd = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

//Trial counter to know where the user is at
var trialCounter = 0;

//image numbers for the array (negative to start)
var randImage1 = -1;
var randImage2 = -1;
var randImage3 = -1;

//grab the image locations
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

//generate 3 random numbers
//check if images were previously displayed (if yes reroll image)
//place images on page
