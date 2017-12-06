/*global $
  global APIKEY
*/


$(function(){
  
  
	
	$.getJSON('//freegeoip.net/json/').done(function(location){
		$('#country').html(location.country_name);
		$('#location').html(location.city +', '+location.region_code+', '+location.country_name);
		
		var lat = location.latitude;
		var long = location.longitude;
		
		$.getJSON('//api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+APIKEY+'&units=imperial', function(data){
			console.log(data);
			
			var fTemp = Math.round(data.main.temp)+'&#8457';  //fahrenheit temperature
			var cTemp = (Math.round((Math.round(data.main.temp)-32) * (5/9)))+'&#8451;';  //celsius temperature
		// 	console.log(cTemp);
		// 	console.log(fTemp);
			var weatherType = data.weather[0].description;
			var weatherIcon = '<img src='+'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png'+'>';  
			
			$('#temp').html(fTemp);
			$('#temp').prepend(weatherIcon);

			$('#tempSwitch').click(function(){
			  
			  
			});
			
			
			$('#weatherType').html(weatherType);
		});  //openweathermap.org
	});  //freegeoip.net
});  //ready function