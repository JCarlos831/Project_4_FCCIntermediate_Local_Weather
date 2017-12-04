/*
    global $
    global APIKEY
    global navigator
*/

$(document).ready(function(){
     var long;
     var lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
             lat = position.coords.latitude;
             long = position.coords.longitude;
            $("#weatherDetails").html("latitude: " + lat + "<br>longitude: " + long);

        });

    }
    var api = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=43554e9551b1521266276edbd5d60132";


    $.getJSON(api, function(data){
 });

    var header = document.createElement("H1");
        header.setAttribute("id", "title");
        header.setAttribute("style", "color: whtie");
        header.innerHTML = "Local Weather App";
    var sun = document.createElement("I");
        sun.setAttribute("class", "fa fa-sun-o");
        sun.setAttribute("aria-hidden", "true");
    document.getElementById("header").appendChild(header);
    document.getElementById("header").appendChild(sun);



});
