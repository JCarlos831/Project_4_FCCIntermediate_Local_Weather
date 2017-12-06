/*global $
  global APIKEY
*/


$(function(){
  
  var cTemp = false;
  var apiData;

  /*
  function to toggle DISPLAY temperature not the temp from API.  fTemp
  parameter is coming from API, cTemp is the boolean from above
  */
  function tempSwitch(fTemp, cTemp){
  	if(cTemp){
  		return Math.round((fTemp-32)*(5/9)) + '&#8451;';
  	} else{
  		return Math.round(fTemp) + '&#8457';
  	}
  }
  
  //placeWeather function
  
  function placeWeather(data, cTemp){
  	var weatherType = data.weather[0].description;
  	var fTemp = tempSwitch(data.main.temp, cTemp);
  	var weatherIcon = data.weather[0].icon;  
  	
  	$('#temp').html(fTemp);
  	$('#temp').prepend('<img src='+'http://openweathermap.org/img/w/'+weatherIcon+'.png'+'>');
  	$('#weatherType').html(weatherType);
  }
  
  //background image array order is (299 thunderstorm, 499 drizzle, 599 rain, 699 snow, 799 fog, 800 clear, 800> cloudy)
  bgImg = [
  		'https://images.unsplash.com/photo-1429552054921-018e433d7d34?auto=format&fit=crop&w=2855&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
		'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?auto=format&fit=crop&w=3068&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
		'https://images.unsplash.com/photo-1428908200541-d395094cc816?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
		'https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?auto=format&fit=crop&w=1199&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
		'https://images.unsplash.com/photo-1504194056878-2c97357912d1?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
		'https://images.unsplash.com/photo-1495333258329-fe29ba3a7b4b?auto=format&fit=crop&w=2734&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
		'https://images.unsplash.com/photo-1498496294664-d9372eb521f3?auto=format&fit=crop&w=2850&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
  	];
  
	
	$.getJSON('//freegeoip.net/json/').done(function(location){
		$('#country').html(location.country_name);
		$('#location').html(location.city +', '+location.region_code+', '+location.country_name);
		
		var lat = location.latitude;
		var long = location.longitude;
		
		$.getJSON('//api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+APIKEY+'&units=imperial', function(data){
			// console.log(data);
			placeWeather(data,cTemp);
			
			$('#tempSwitch').click(function(){
				cTemp = !cTemp;
				placeWeather(data,cTemp);
			});
			
		// 	var fTemp = Math.round(data.main.temp)+'&#8457';  //fahrenheit temperature
		// // 	console.log(fTemp);
			// $('#temp').html(fTemp);
			// $('#temp').prepend(weatherIcon);
			// $('#weatherType').html(weatherType);
			
			// $.getJSON('//api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+APIKEY+'&units=imperial', function(forecast){
			// 	console.log(forecast);
			// 	$('#forecast').html(forecast.list[0].main.temp);
			// }); //openweathermap.org 5 day
		});  //openweathermap.org current
	});  //freegeoip.net
});  //ready function