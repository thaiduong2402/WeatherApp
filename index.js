const searchInput = document.querySelector('#search-input');
 const appId = 'b736e8c8619e5fff5dc4db73ac3be4e6';
 const DEFAULT_VALUE = '++'
 const cityName = document.querySelector('.city-name');
 const weatherState = document.querySelector('.weather-state');
 const temperature = document.querySelector('.temperature');
 const sunrise = document.querySelector('.sunrise'); 
 const sunset = document.querySelector('.sunset');
 const humidity = document.querySelector('.humidity');
 const windSpeed = document.querySelector('.wind-speed');
 const weatherIcon = document.querySelector('.weather-icon');
 const soundOn = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
 const soundOff = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
 var KTsound = 0 ;
 searchInput.addEventListener('change',(e)=>{
 	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${appId}&units=metric&lang=vi`)
 	.then(async res =>{
 		const data = await res.json();
 		console.log('[Search Input]', data);
 		cityName.innerHTML = data.name||DEFAULT_VALUE;
 		weatherState.innerHTML = data.weather[0].description||DEFAULT_VALUE;
 		weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
 		temperature.innerHTML = Math.round(data.main.temp)||DEFAULT_VALUE;
 		sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm')||DEFAULT_VALUE;
 		sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm')||DEFAULT_VALUE;
 		humidity.innerHTML = data.main.humidity||DEFAULT_VALUE;
 		windSpeed.innerHTML = (data.wind.speed* 3.6).toFixed(2)||DEFAULT_VALUE;
 		

 	});

 });

 var audioIcon = document.querySelector('#audio-icon');
 const ic = document.querySelector('#ic');
 audioIcon.addEventListener('click',(e)=>{
 	if(KTsound==0)
 	{
 		console.log('mute');
 		audioIcon.removeChild(ic);
 		var i = document.createElement('i');
 		i.
 		KTsound = 1;

 	}
 	else{
 		console.log('unmute');
 		KTsound = 0;
 	}
 })
