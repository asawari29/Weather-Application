// let weather = {
// apiKey: "a1a68481e40bf1e449574fe638e817f2",

function fetchweather(city)
{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
     + city 
     + "&units=metric&appid=a1a68481e40bf1e449574fe638e817f2")

   .then((response)=> response.json())
   .then((data)=>
   this.displayWeather(data));
}

function displayWeather (data)
{
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = "weather in "+ name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/w/"+icon+".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity:"+ humidity + "%"; 
    document.querySelector(".windspeed").innerText = "windspeed:"+ speed + "km/hr"; 
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('http://source.unsplash.com/1600x900/?" + name +"')"
}

function search()
{
    this.fetchweather(document.querySelector(".search-bar").value);
}

document.querySelector(".search button").addEventListener("click",function()
{
    search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event)
{
 if(event.key=="Enter")
 {
     search();
 }
});


