"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Nicholas Le
   Date:  02/12/19 

*/
//Changes the date
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

//Displays the date
document.getElementById("timeStamp").innerHTML = timeStr;

//Gets hours and months
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2 * thisMonth + thisHour) % 24;

//Shows the sky map img on the web browser
var imgStr = "<img src = 'sd_sky" + mapNum + ".png'/>";
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);