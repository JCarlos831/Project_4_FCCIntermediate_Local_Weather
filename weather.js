/*global $*/


$(function(){
	
	$.getJSON('//freegeoip.net/json/').done(function(location){
		$('#country').html(location.country_name);
		$('#city').html(location.city +', '+location.region_code);
		
		var lat = location.latitude;
		var long = location.longitude;
		
		$.getJSON('//api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long, function(data){
			console.log(data);
		});
		
		
		
		
		
		
		
	});
	
	
	
	
	
	
	
	
})