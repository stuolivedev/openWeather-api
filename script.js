const APP_KEY = '0bbaff02dd8e0a92c0f7a3be267b8693';


window.addEventListener('load', () => {

  navigator.geolocation.getCurrentPosition((position) => {
    var LAT = position.coords.latitude;
    var LON = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${APP_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then(data => {

        let temp = data.main.temp
        temp = temp.toFixed(1)

        let location = data.name
        let country = data.sys.country
        let description = data.weather[0].main

        let min = data.main.temp_min
        min = min.toFixed(0)
        let max = data.main.temp_max
        max = max.toFixed(0)

        document.getElementById('temp').innerHTML = temp + '°'
        document.getElementById('desc').innerHTML = description
        document.getElementById('location').innerHTML = location + ', ' + country
        document.getElementById('minMax').innerHTML = min + '°' + ' / ' + max + '°'

        let time = new Date()
        if (time.getHours() > 6 && time.getHours() < 9) {
            $('#body').addClass('sunrise');
          } else if (time.getHours() > 9 && time.getHours() < 17) {
            $('#body').addClass('day');
          } else if (time.getHours() > 17 && time.getHours() < 20) {
            $('#body').addClass('sunset');
          }
          else {
            $('#body').addClass('body');
          }
          console.log(time.getHours())

        console.log(data);
      })
  })
});


