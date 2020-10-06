const APP_KEY = '0bbaff02dd8e0a92c0f7a3be267b8693';



document.getElementById('search').addEventListener('click', function(){
  let CITY = document.getElementById('inputValue').value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${APP_KEY}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)

    if (data.message == "city not found") {
      alert('City not found :(');
      return
    } else {

    let temp= data.main.temp
    let tempFeel = data.main.feels_like
    let location = data.name
    let country = data.sys.country
    let iconCode = data.weather[0].icon
    let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"

    document.getElementById('temp').innerHTML = temp + 'c'
    document.getElementById('tempFeel').innerHTML = tempFeel + 'c' 
    document.getElementById('location').innerHTML = location + ', ' + country
    document.getElementById('icon').src = iconUrl


    }
  })
  document.getElementById('inputValue').value = '';
  });


  let i;
  for (i = 1; i < data.length; i++) {
    console.log(i)
  }