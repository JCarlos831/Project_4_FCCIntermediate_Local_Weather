if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  	
  	var lat = position.coords.latitude;
  	var long = position.coords.longitude;

  	$.getJSON('//api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=imperial'+APIKEY).done(function(data){
  		console.log(data);
  		
  		var fTemp = Math.round(data.main.temp)+ '&#8457;';
  		var cTemp = Math.round((data.main.temp -32)* (5/9)+ '&#8451;');

  		$('#weatherIcon').html('<img src='+'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png>');
  		$('#temp').html(fTemp);
  		$('#weatherType').html(data.weather[0].description);
  		$('#location').html(data.name);
  		console.log(data.weather[0].icon);
  		
  	});






  });
}