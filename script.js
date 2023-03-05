const input = document.querySelector("input");
const button = document.querySelector("button");

const place = document.querySelector("#place");
const degrees = document.querySelector("#degrees");
const img = document.querySelector(".img");
const wind = document.querySelector("#wind");
const content = document.querySelector(".content")

button.addEventListener('click', () =>{
    if(!input.value)return;

    getDataApi();
})

async function getDataApi(){
    let url = `https://api.openweathermap.org/data/3.0/onecall?${encodeURI(
        input.value
        )}&units=metric&appid={7456356ed3659ccb4ed470d4fcb8f1a8}`;

        try{
             await fetch(url)
             .then((res)=> res.json())
             .then((data)=> {
                if(data?.cod && data.cod === "404"){
                 return alert('local não encontrado!!');
                }
               loadData(data);
             });
            }catch(error){
                alert(error);
            }
        }

        function loadData(data){
            place.innerHTML = `${data.name}, ${data.sys.country}`;
            degrees.innerHTML = `Temperatura: ${math.floor(data.main.temp)}°C`;
            img.src = `http://openweathertmap.org/img/wn/${data.weather[0].icon}@2x.png`;
            wind.innerHTML = `vento: ${data.wind.speed} km/h`
            content.style.display = 'flex'
        }