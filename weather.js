/*global $*/

$(document).ready(function(){
    
    var header = document.createElement("H1");
        header.setAttribute("id", "title");
        header.setAttribute("style", "color: white");
        header.innerHTML = "Local Weather App";
    var sun = document.createElement("I");
        sun.setAttribute("class", "fa fa-sun-o");
        sun.setAttribute("aria-hidden", "true");
    document.getElementById("header").appendChild(header);
    document.getElementById("header").appendChild(sun);  
    
    
    
});



