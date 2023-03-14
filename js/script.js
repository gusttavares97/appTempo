//7456356ed3659ccb4ed470d4fcb8f1a8
const apiKey = 'fc4fb21cb0c8c1b3a9012cff4169a9cc'
const apiCountryUrl = "https://countryflagsapi.com/png/"

const cityInput =document.querySelector("#city-input");
const searcBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind');


const weatherConteiner = document.querySelector("#weather-data");

//falta trata o erro \\


const getWeatherData = async (city)=>{
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl)
  
    const data = await res.json()
  
    
    return data

}

const shoeWeatherData = async (city)=>{
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description; 
    weatherIconElement.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    humidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}km/h`

    weatherConteiner.classList.remove("hide")
}


searcBtn.addEventListener("click",(e)=>{
    e.preventDefault();

const city = cityInput.value

shoeWeatherData(city)

    
})

cityInput.addEventListener("keyup", (e) =>{
    
    if(e.code === "Enter"){
    const city = e.target.value

    shoeWeatherData(city)
    }
});