document.getElementById("dt").addEventListener("click",function(){
	document.getElementById("dt").style.height="320px";

});
document.getElementById("dt").addEventListener("mouseout",function(){
	document.getElementById("dt").style.height="150px";

});

//date set

setInterval(myTimer,1000)

function myTimer(){
	var d = new Date();
    document.getElementById("dt").innerHTML=d;
}
cty='kathmandu';
findWeatherDetails();

 

function add(){
	document.getElementById("ad").style.display='none';
	document.getElementById("low2").style.display="block";
	document.getElementById("low1").style.float="right";
    document.getElementById("low2").style.float="right";

	document.getElementById("rem").style.display='block';
	document.getElementById("low2").style.width="50%";
	document.getElementById("low1").style.width="50%";

	

	//document.getElementById("se1").innerHTML="";
	//document.getElementById("se2").innerHTML="<input class="city" id="search-text" type="text"  placeholder="Search city..." >";
	//document.getElementById("se3").innerHTML="<input class="city" id="search-text1" type="text"  placeholder="Search city..." >";



}
function remove(){
	document.getElementById("ad").style.display='block';
	document.getElementById("low2").style.display="none";
	document.getElementById("rem").style.display="none";
	document.getElementById("low1").style.width="100%";

	//document.getElementById("se1").innerHTML="<input class="city" id="search-text" type="text"  placeholder="Search city..." >";
	//document.getElementById("se2").innerHTML="";
	//document.getElementById("se3").innerHTML="";

}




//ths the weather reqest//
let searchButton = document.getElementById("001");
let searchInput = document.getElementById("search-text");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humid");
let wind = document.getElementById("wind");
let high = document.getElementById("highest");
let low = document.getElementById("lowest");
let weathr = document.getElementById("wh-name");
let sunr = document.getElementById("sunr1");
let suns = document.getElementById("suns1");


let searchInput2 = document.getElementById("search-text2");
let cityName2 = document.getElementById("city-name2");
let icon2 = document.getElementById("icon2");
let temperature2 = document.getElementById("temp2");
let humidity2 = document.getElementById("humid2");
let wind2 = document.getElementById("wind2");
let high2 = document.getElementById("highest2");
let low2 = document.getElementById("lowest2");
let weathr2 = document.getElementById("wh-name2");
let sunr2 = document.getElementById("sunr2");
let suns2 = document.getElementById("suns2");


//searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);
searchInput2.addEventListener("keyup", enterPressed2);



function enterPressed(event) {
  cty= document.getElementById("search-text").value;
  if (event.key === "Enter") {
  	console.log(cty);
    findWeatherDetails();
  }
}

cty2='london';

function enterPressed2(event) {
  cty2= document.getElementById("search-text2").value;
  if (event.key === "Enter") {
    findWeatherDetails2();
  }
}


function findWeatherDetails() {
	

	
	
	let searchLink = 'https://api.openweathermap.org/data/2.5/weather?q='+cty+'&appid=7a62b2fe76c7ec15c3e5dc45d4fe2fcf';

	

  
    
    

    httpRequestAsync(searchLink, theResponse);
  
 }

 function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  weathr.innerHTML = jsonObject.weather[0].main;
  icon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + '&#8451';
  x=parseInt(jsonObject.main.temp - 273);
  y=((x*9/5)+32);
  humidity.innerHTML = jsonObject.main.humidity + "%";
  wind.innerHTML = jsonObject.wind.speed+ "m/s";

  sunr.innerHTML=jsonObject.sys.sunrise;
  suns.innerHTML=jsonObject.sys.sunset;
  high.innerHTML = parseInt(jsonObject.main.temp_max - 273);
  x1 =parseInt(jsonObject.main.temp_max - 273);
  y1=((x1*9/5)+32);
  low.innerHTML = parseInt(jsonObject.main.temp_min - 273);
  x2=parseInt(jsonObject.main.temp_min - 273);
  y2=((x2*9/5)+32);


  console.log(jsonObject);
}

function findWeatherDetails2() {

  
    let searchLink = 'https://api.openweathermap.org/data/2.5/weather?q='+cty2+'&appid=7a62b2fe76c7ec15c3e5dc45d4fe2fcf';
    httpRequestAsync(searchLink, theResponse2);
  
 }

 function theResponse2(response) {
  let jsonObject = JSON.parse(response);
  cityName2.innerHTML = jsonObject.name;
  weathr2.innerHTML = jsonObject.weather[0].main;
  icon2.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature2.innerHTML = parseInt(jsonObject.main.temp - 273) + '&#8451';
  a=parseInt(jsonObject.main.temp - 273);
  b=((a*9/5)+32);
  humidity2.innerHTML = jsonObject.main.humidity + "%";
  wind2.innerHTML = jsonObject.wind.speed+ "m/s";
  sunr2.innerHTML=jsonObject.sys.sunrise;
  suns2.innerHTML=jsonObject.sys.sunset;


  high2.innerHTML = parseInt(jsonObject.main.temp_max - 273);
  a1 =parseInt(jsonObject.main.temp_max - 273);
  b1=((a1*9/5)+32);
  low2.innerHTML = parseInt(jsonObject.main.temp_min - 273);
  a2=parseInt(jsonObject.main.temp_min - 273);
  b2=((a2*9/5)+32);


  console.log(jsonObject);
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            callback(httpRequest.responseText);
        }
        else if(httpRequest.readyState == 4 && httpRequest.status == 404){
        	alert("City  name is incorrect");
        }

    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

//ths end here//
function ch1(){
	
	document.getElementById("temp").innerHTML=y + '&#8457';
	document.getElementById("highest").innerHTML=y1;
	document.getElementById("lowest").innerHTML=y2;
	document.getElementById("temp2").innerHTML=b + '&#8457';
	document.getElementById("highest2").innerHTML=b1;
	document.getElementById("lowest2").innerHTML=b2;
}

function ch2(){
	
	document.getElementById("temp").innerHTML=x + '&#8451';
	document.getElementById("highest").innerHTML=x1;
	document.getElementById("lowest").innerHTML=x2;
	document.getElementById("temp2").innerHTML=a + '&#8451';
	document.getElementById("highest2").innerHTML=a1;
	document.getElementById("lowest2").innerHTML=a2;
}

//this is to make comparision page//
document.getElementById("ad").addEventListener("click", findWeatherDetails2);