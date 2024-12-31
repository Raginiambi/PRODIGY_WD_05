let search_btn = document.querySelector("#search");
let weat_box = document.querySelector("#weat-box");
let imgs = document.querySelector("#imgs");

let h2 = document.querySelector("#new-h2");
let input = document.querySelector("input");
let temp = document.querySelector("#temp")
let tempdiv = document.querySelector("#tempdiv");
let subhum = document.querySelector("#subhum");
let subwind = document.querySelector("#subwind");
let wind_speed = document.querySelector("#wind-speed");
let hum = document.querySelector("#hum");
let cloud = document.querySelector("#cloudy");

const apikey = "2e764df439983fa6bfc4f19df9cea9ba";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    
    h2.innerText = data.name;
    temp.innerText = Math.round(data.main.temp) + "\u00B0C";
    console.log(data);
    wind_speed.innerText = data.wind.speed + "m/s";
    hum.innerText = data.main.humidity + "%";
    subhum.style.visibility="visible";
    subwind.style.visibility="visible";
    console.log(data.weather[0].main);
    if(data.weather[0].main == "Clouds"){
        cloud.src = "cloudy-removebg-preview.png";
        cloud.style.visibility="visible";
        cloud.style.height = "143x";
        cloud.style.width = "143px";
    }else if(data.weather[0].main == "Haze"){
       cloud.src = "haze_weather.png";
       cloud.style.visibility="visible";
       cloud.style.height = "83px";
       cloud.style.width = "118px";
    }else if(data.weather[0].main == "Rain"){
        cloud.src = "rainy-removebg-preview.png";
        cloud.style.visibility="visible";
        cloud.style.height = "110px";
        cloud.style.width = "158px";
    }else if(data.weather[0].main == "Clear"){
        cloud.src = "clear_weather-removebg-preview.png";
        cloud.style.visibility="visible";
        cloud.style.height = "134px";
        cloud.style.width = "156px";
    }
    else if(data.weather[0].main == "Drizzle"){
        cloud.src = "drizzle_weather-removebg-preview.png";
        cloud.style.visibility="visible";
        cloud.style.height = "120px";
        cloud.style.width = "193px";
    }
    else if(data.weather[0].main == "Mist"){
        cloud.src = "mist_weather.png";
        cloud.style.visibility="visible";
        cloud.style.height = "78px";
        cloud.style.width = "93px";
    }
    


}

search_btn.addEventListener("click",()=>{
       weat_box.style.height="450px";
    weat_box.style.width="380px";

    checkweather(input.value); 
})








