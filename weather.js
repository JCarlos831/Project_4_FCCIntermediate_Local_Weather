/*global $
  global APIKEY
*/
$(function(){

	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
			$.getJSON('//api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=imperial' + APIKEY).done(function(data) {
				var fTemp = Math.round(data.main.temp) + '&#8457;';
				var cTemp = Math.round((data.main.temp - 32) * (5 / 9) + '&#8451;');
				$('#location').html('Current Weather in '+'<br>'+data.name);
				$('#weatherIcon').html('<img src=' + 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png>');
				$('#temp').html(fTemp);
				$('#weatherDesc').html(data.weather[0].description);
				$('#weatherType').html(data.weather[0].main);
				
			
			});
		});
	}
});