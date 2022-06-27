//urls
var homePage = "indexOne.html";
//works.html

//rollovers images
//get images and links
let images = document.getElementsByTagName("img");
//initial image
let firstImg = images[0];
//all links
let links = document.getElementsByTagName("a");
//all images
let homeImg = images[1];
let aboutImg = images[2];
let beliefsImg = images[3];
let missionImg = images[4];
let contactImg = images[5];

//events
homeImg.addEventListener("mouseover", function(){
	firstImg.setAttribute("src","img/ptg_home.png");
});

aboutImg.addEventListener("mouseover", function(){
	firstImg.setAttribute("src","img/ptg_about.png");
});

beliefsImg.addEventListener("mouseover", function(){
	firstImg.setAttribute("src","img/ptg_beliefs.png");
});

missionImg.addEventListener("mouseover", function(){
	firstImg.setAttribute("src","img/ptg_mission_vision.png");
});

contactImg.addEventListener("mouseover", function(){
	firstImg.setAttribute("src","img/ptg_contact.png");
});