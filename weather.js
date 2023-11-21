//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

let lat = '11.100806944445692';
let lon = '77.02296063366485';
// let API_key = 'e1b9c9f8ca3e49a7cf2d5161ec319ef6';
let API_key = '5b9441056bba2ffb0d1da1631c7fc001';

let URL = `https://api.openweathermap.org/data/2.5/weather?q=coimbatore&APPID=${API_key}`;

const getData = async () => {
  let data = await fetch(URL);
  data = await data.json();

  let box = document.createElement('div');
  box.classList = 'whetherBox';

  let name = document.createElement('h2');
  name.innerHTML = data.name + ', ' + data.sys.country;

  const date = new Date();
  let today = `${date}`;
  let currDate = document.createElement('p');
  currDate.innerHTML = today.slice(0, 15);

  let temp = (data.main.temp - 273).toFixed(2);
  let mainTemp = document.createElement('h1');
  mainTemp.innerHTML = temp;

  let weather = data.weather[0].main;
  let weatherDiv = document.createElement('h3');
  weatherDiv.innerHTML = weather;

  let min = (data.main.temp_min - 273).toFixed(2);
  let max = (data.main.temp_max - 273).toFixed(2);
  let tempDiff = document.createElement('p');
  tempDiff.innerHTML = `${min} / ${max}`;

  box.append(name, currDate, mainTemp, weatherDiv, tempDiff);
  document.querySelector('#container').append(box);
};

getData();
