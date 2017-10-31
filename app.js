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
var dogDuck = new Product('dog duck', './img/dog-duck.jpg');
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

//How many trials should be in this study?
var numOfTrials = 25;

//grab the image locations and counter position
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var progress = document.getElementById('progress');
var imageContainer = document.getElementById('image_container');

function displayRandomImages() {
  // give a ticker +1 for objects selected
  //image numbers for the array (negative to start)
  var randImage1 = -1;
  var randImage2 = -1;
  var randImage3 = -1;

  //check if trialcounter is less than 25
  //after 25 trials (or assigned number) then display statistics
  if (trialCounter === numOfTrials) {
    var newPTag;
    var prodPercent;
    for (var j = 0; j < arrOfProd.length; j++) {
      newPTag = document.createElement('p');
      prodPercent = Math.round(arrOfProd[j].clicks / arrOfProd[j].totalShown * 100);
      newPTag.innerHTML = 'Product: ' + arrOfProd[j].name + ', Number of times shown: ' + arrOfProd[j].totalShown + ', Number of times selected: ' + arrOfProd[j].clicks + ', % of time selected: ' + prodPercent + '%';
      imageContainer.appendChild(newPTag);
    }
    image1.style.display = 'none';
    image2.style.display = 'none';
    image3.style.display = 'none';
    progress.style.display = 'none';

    //turn off event listeners
    image1.removeEventListener('click', onClickData);
    image2.removeEventListener('click', onClickData);
    image3.removeEventListener('click', onClickData);
    return;
  }

  //increment trial counter
  trialCounter++;
  progress.innerHTML = 'Product trial ' + trialCounter + '/25';

  //generate 3 random numbers
  //check if images were previously displayed (if yes reroll image) with corresponding numbers
  randImage1 = getRandomInt(0, arrOfProd.length);
  while (arrOfProd[randImage1].justShown === true) {
    randImage1 = getRandomInt(0, arrOfProd.length);
  }

  randImage2 = getRandomInt(0, arrOfProd.length);
  while (arrOfProd[randImage2].justShown === true || randImage2 === randImage1) {
    randImage2 = getRandomInt(0, arrOfProd.length);
  }

  randImage3 = getRandomInt(0, arrOfProd.length);
  while (arrOfProd[randImage3].justShown === true || randImage3 === randImage2 || randImage3 === randImage1) {
    randImage3 = getRandomInt(0, arrOfProd.length);
  }

  console.log('image 1 number:', randImage1);
  console.log('image 2 number:', randImage2);
  console.log('image 3 number:', randImage3);

  //set flags to true for the next iteration and remove old flags
  for (var i = 0; i < arrOfProd.length; i++) {
    arrOfProd[i].justShown = false;
  }

  arrOfProd[randImage2].justShown = true;
  arrOfProd[randImage1].justShown = true;
  arrOfProd[randImage3].justShown = true;

  //increment total times shown on displayed images
  arrOfProd[randImage2].totalShown++;
  arrOfProd[randImage1].totalShown++;
  arrOfProd[randImage3].totalShown++;

  //place images on page
  image1.setAttribute('src', arrOfProd[randImage1].path);
  image2.setAttribute('src', arrOfProd[randImage2].path);
  image3.setAttribute('src', arrOfProd[randImage3].path);
}

//perform on click function
function onClickData(e) {
  console.log(e.target.getAttribute('src'));

  for (var i = 0; i < arrOfProd.length; i++) {
    if (e.target.getAttribute('src') === arrOfProd[i].path) {
      arrOfProd[i].clicks++;
    }
  }

  //display more images or statistics
  displayRandomImages();

}

displayRandomImages();

image1.addEventListener('click', onClickData);
image2.addEventListener('click', onClickData);
image3.addEventListener('click', onClickData);
