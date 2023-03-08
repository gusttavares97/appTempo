//7456356ed3659ccb4ed470d4fcb8f1a8
const apiKey = 'fc4fb21cb0c8c1b3a9012cff4169a9cc'
const apiCountryUrl = "https://countryflagsapi.com/png/"

const cityInput =document.querySelector("#city-input");
const searcBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const umidityElement = document.querySelector('#umidity span');
const windElement = document.querySelector('#wind');


const getWeatherData = async (city)=>{
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherUrl)
    const data = await res.json()

    console.log(data)

}

const shoeWeatherData =(city)=>{
    getWeatherData(city)
}


searcBtn.addEventListener("click",(e)=>{
    e.preventDefault();

const city = cityInput.value

shoeWeatherData(city)

    
})