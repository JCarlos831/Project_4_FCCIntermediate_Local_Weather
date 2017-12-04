/*
    global $
    global APIKEY
    global navigator
*/

    var header = document.createElement("H1");
        header.setAttribute("id", "title");
        header.setAttribute("style", "color: whtie");
        header.innerHTML = "Local Weather App";
    var sun = document.createElement("I");
        sun.setAttribute("class", "fa fa-sun-o");
        sun.setAttribute("aria-hidden", "true");
        document.getElementById("header").appendChild(header);
        document.getElementById("header").appendChild(sun);

$(document).ready(function(){
     var long;
     var lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
             lat = position.coords.latitude;
             long = position.coords.longitude;
            $("#weatherDetails").html("latitude: " + lat + "<br>longitude: " + long);

    var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+APIKEY;


    $.getJSON(api, function(data){
         var city = data.name;
         console.log(city);
        
    });

    });

    }

});
