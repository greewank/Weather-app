const city = document.querySelector('.city');
const img_icon = document.querySelector('.icon');
const temperature = document.querySelector('.temp');
const desc = document.querySelector('.description');
const humid = document.querySelector('.humidity');
const windy = document.querySelector('.wind');
const search = document.querySelector('.search button');
const search_bar = document.querySelector('.search-container');
const btn = document.querySelector('.btn-container');
const s_weather = document.querySelector('.weather');

let weather = {
    api_key : "502d1728e6d2542b0b40cae630c671ca",
    fetchweather : async function (city){
        const receive = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=' 
        + city + '&units=metric&appid='
        +this.api_key)
        const data = await receive.json();
        this.display(data);
    },

    display : (data) =>{
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

        city.innerText = "Weather in " + name +":";
        city.style.color = "white";
        img_icon.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        desc.innerText = "Has " + description +" at the moment";
        desc.style.color = "white";
        temperature.innerText = "The current temperature in " +name+ " is " +temp + "°C";
        temperature.style.color = "white";
        humid.innerText = "It is " + humidity + "% humid";
        humid.style.color = "white";
        windy.innerText = "The speed at which the wind is blowing is " +speed+ " km/h";
        windy.style.color = "white";
        
        // document.querySelector(".weather").classList.remove("loading");
        s_weather.classList.remove('loading');
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    searching : function (){
        this.fetchweather(search_bar.value);
    },
};

    search.addEventListener("click", ()=>{
        weather.searching();
    });

    search_bar.addEventListener("keyup", function (e){
        if (e.key == "Enter"){
            weather.searching();
        }
    })

weather.fetchWeather("Denver");