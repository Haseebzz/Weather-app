const search = document.getElementById('search');
const form = document.getElementById('form');
const name = document.getElementById('name');
const description = document.getElementById('description');
const weather = document.getElementById('weather');

async function Weather(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=2714f087543f56c91613129fbbe1f4dd`;
    let res = await fetch(url);
    let resData = await res.json();
    //console.log(resData);
    //console.log(resData.name, resData.weather[0].description, resData.main.temp);
    name.innerText = resData.name;
    description.innerText = resData.weather[0].description;
    kelvin(resData);
    
}

async function kelvin(data){
    let temp = data.main.temp
    temp = Math.floor((temp - 273.15) * 9/5 + 32);
     weather.innerText = temp + '°F';
}

form.addEventListener('submit', (e) => {
     e.preventDefault();

     const text = search.value;

     if(text){
        Weather(text);

        search.value = '';
     }
});