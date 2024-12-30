const apiKey="7544363a14ce163e910170fa077d7387";

const weatherDataElement=document.getElementById("weather-data");

const cityInputElement= document.getElementById("city-input");

const formElement = document.querySelector("form");




function fetchWeather(url){
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("No information");
        }
        return response.json(); // Convierte la respuesta en JSON
    })
    .then(data => {
       
   
        const iconCode = data.weather[0].icon;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    
    const feelsLike = data.main.feels_like;
    
    const humidity = data.main.humidity;
    
    const windSpeed = data.wind.speed;

    console.log("temperature", temperature); 
    console.log("description", description); 
    console.log("Feels like", feelsLike); 
    console.log("Humidity", humidity); 
    console.log("Wind Speed", windSpeed); 

document.querySelector('.icon img').src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.querySelector('.temperature').textContent=`${temperature}°C`;
    document.querySelector('.description').textContent = description;
document.querySelector('.details').innerHTML =`
<div>Feels like: ${feelsLike}°C</div>
<div>Humidity: ${humidity}%</div>
<div>Wind Speed: ${windSpeed} m/s</div>`;
})
    .catch(error => {
        console.error("Error en la solicitud:", error);
        document.querySelector('.details').innerHTML = `<div style="color:white;">${error.message}</div>`;
    });
    
   

}

function getWeather(event){
    /////previene que la pagina no se revargue
event.preventDefault();
let mostrarValor=cityInputElement.value;


const url =`https://api.openweathermap.org/data/2.5/weather?q=${mostrarValor}&appid=7544363a14ce163e910170fa077d7387&units=metric`;
fetchWeather(url);



}
formElement.addEventListener("submit",getWeather);

