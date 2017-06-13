var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
'16:00', '17:00', '18:00', '19:00', '20:00',];

var runningTotal = 0;


function cookiesSold(place) {
  let bot = Math.ceil(place.minph);
  let top = Math.floor(place.maxph);
  let people = Math.floor(Math.random() * (top - bot + 1)) + bot;
  return Math.floor(place.avgph * people)
}

// function upPend(store, list)  -
// for (var i = 0; i <hours.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = hours[i] + ": " + cookiesSold(store) + " cookies";
//   list.appendChild(liEl);
// }

var firPik = {
  locationName: '1st and Pike',
  minph: 23,
  maxph: 65,
  avgph: 6.3,
}

var firPikUl = document.getElementById('firPik');

for (var i = 0; i < hours.length; i++) {
  var soldCook = cookiesSold(firPik);
  var runningTotal = runningTotal + soldCook;
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + soldCook + " cookies";
  firPikUl.appendChild(liEl);
}

var seaAir = {
  locationName: 'SeaTac Airport',
  minph: 3,
  maxph: 24,
  avgph: 1.2
};

var seaAirUl = document.getElementById('seaAir');

for (var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + cookiesSold(seaAir) + " cookies";
  seaAirUl.appendChild(liEl);
}

var seaCen = {
  locationName: 'Seattle Center',
  minph: 11,
  maxph: 38,
  avgph: 3.7
}

var seaCenUl = document.getElementById('seaCen');

for (var i = 0; i <hours.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + cookiesSold(seaCen) + " cookies";
  seaCenUl.appendChild(liEl);
}

var capHil = {
  locationName: 'Capitol Hill',
  minph: 20,
  maxph: 38,
  avgph: 2.3
}

var capHilUl = document.getElementById('capHil');

for (var i = 0; i <hours.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + cookiesSold(capHil) + " cookies";
  capHilUl.appendChild(liEl);
}

var alki = {
  locationName: 'Alki',
  minph: 2,
  maxph: 16,
  avgph: 4.6
}

var alkiUl = document.getElementById('alki');

for (var i = 0; i <hours.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + cookiesSold(alki) + " cookies";
  alkiUl.appendChild(liEl);
}
