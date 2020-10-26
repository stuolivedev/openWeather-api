let temp = data.main.temp
temp = temp.toFixed(1)

let location = data.name
let country = data.sys.country
let description = data.weather[0].description

let min = data.main.temp_max
min = min.toFixed(0)
let max = data.main.temp_min
max = max.toFixed(0)

document.getElementById('temp').innerHTML = temp + '°'
document.getElementById('desc').innerHTML = description
document.getElementById('location').innerHTML = location + ', ' + country
document.getElementById('minMax').innerHTML = min + '°' + ' / ' + max + '°'
