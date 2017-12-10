/*global $
  global APIKEY
*/

$(function(){

	var C = false;

		function displayTemp(F,C){
			if(C)
			return Math.round((F-32)*(5/9))+'&deg; C';
			return Math.round(F)+'&deg; F';
		}

		function displayWeather(data,C){
			var weatherDesc = data.weather[0].description;
			var temp = displayTemp(data.main.temp,C);
			var icon = data.weather[0].icon;
			var weatherType = data.weather[0].main;

			$('#temp').html(temp);
			$('#weatherDesc').html(weatherDesc);
			$('#weatherType').html(weatherType);

			var apiIcon = 'http://openweathermap.org/img/w/' + icon + '.png';
			$('#weatherIcon').html('<img src='+apiIcon+'>');
		}
		
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var lat = position.coords.latitude;
					var long = position.coords.longitude;

			$.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=imperial'+APIKEY, function(data){
				$('#location').html('Current weather in ' + '<br>' +data.name+ '<br>'+ 'is')
				$('#windSpeed').html('The current wind speed is ' + Math.round(data.wind.speed) + ' mph');

				displayWeather(data,C)


				$('#switch').click(function(){
					C=!C;
					displayWeather(data,C);
				})
			})
		})
	}
})
