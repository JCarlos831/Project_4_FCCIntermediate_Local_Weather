/*
    global $
    global APIKEY
    global navigator
*/

$(document).ready(function(){
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
            
        });
        
    }
    
    var api = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=" + APIKEY;
    
    var header = document.createElement("H1");
        header.setAttribute("id", "title");
        header.setAttribute("style", "color: white");
        header.innerHTML = "Local Weather App";
    var sun = document.createElement("I");
        sun.setAttribute("class", "fa fa-sun-o");
        sun.setAttribute("aria-hidden", "true");
    document.getElementById("header").appendChild(header);
    document.getElementById("header").appendChild(sun);  
    
    $.getJSON(api, function(data){
        alert(data.coord.lon);
    });
    
    
    
});



