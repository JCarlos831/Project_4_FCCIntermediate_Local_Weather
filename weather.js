/*
    global $
    global APIKEY
    global navigator
*/
$(document).ready(function() {
	var long;
	var lat;
	var header = document.createElement("H1");
	header.setAttribute("id", "title");
	header.setAttribute("style", "color: whtie");
	header.innerHTML = "Local Weather App";
	var sun = document.createElement("I");
	sun.setAttribute("class", "fa fa-sun-o");
	sun.setAttribute("aria-hidden", "true");
	document.getElementById("header").appendChild(header);
	document.getElementById("header").appendChild(sun);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			long = position.coords.longitude;
// 			$("#weatherDetails").html("latitude: " + lat + "<br>longitude: " + long);
			var api = "//api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + APIKEY;
			$.getJSON(api, function(data) {
				var city = data.name;
				var weatherType = data.weather[0].description;
				var kTemp = data.main.temp;
				var fTemp = Math.floor((kTemp*(9/5))-459.67);
				var cTemp = Math.floor(kTemp-273.15);
				$("#weatherDetails").html(city+"<br>"+weatherType+"<br>"+fTemp+"&#8457;"+"<br>"+cTemp+"&#8451;");
				// $("#weatherDetails").appendChild(weatherType);
				// $("#weatherDetails").appendChild(kTemp);
				// alert(city+"\n"+weatherType+"\n"+fTemp+"&#176;"+"\n"+cTemp+"&#8457;");
			});
		});
	}
});