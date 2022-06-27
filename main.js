//iframe window
let winFrame= document.getElementById("windowFrame");

//grabbing icons
let icons =document.getElementsByClassName("icons");

//icon buttons
let aboutIcon = icons[0];
let contactIcon = icons[1];
let projectsIcon = icons[2];

//urls
var aboutPage = "about.html";
var contactPage ="contact.html";
var projectsPage ="works.html";

//onClick Events
//aboutBtnIcon
aboutIcon.addEventListener("click",(e)=>{
	winFrame.setAttribute("src",aboutPage);
	
});

//contactBtnIcon
contactIcon.addEventListener("click",(e)=>{
	winFrame.setAttribute("src",contactPage);
	
});

//projectsBtnIcon
projectsIcon.addEventListener("click",(e)=>{
	winFrame.setAttribute("src",projectsPage);
	
});
