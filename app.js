var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
'16:00', '17:00', '18:00', '19:00', '20:00',];
var branches = [];

function sellCookies() {
  for (var i = 0; i < hours.length; i++) {
    function cookiesSold(place) {
      let bot = Math.ceil(this.minph);
      let top = Math.floor(this.maxph);
      let people = Math.floor(Math.random() * (top - bot + 1)) + bot;
    };
  };
};

function Branch(name, min, max, avg) {
  this.name = name;
  this.minph = min;
  this.maxph = max;
  this.avgph = avg;
  this.cookiesSoldEachHour = [];
  this.totalSold = 0;
  branches.push(this);
};

Branch.prototype.sellCookies = function() {
  for (var i = 0; i < hours.length; i++) {
      var bot = Math.ceil(this.minph);
      var top = Math.floor(this.maxph);
      var people = Math.floor(Math.random() * (top - bot + 1)) + bot;
      this.totalSold = this.totalSold + Math.floor(this.avgph * people);
      this.cookiesSoldEachHour.push(Math.floor(this.avgph * people));
  }
}

Branch.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    trEl.appendChild(tdEl);
  };
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSold;
  trEl.appendChild(tdEl);
  cookies.appendChild(trEl)
}

  var pike = new Branch('1st and Pike', 23, 65, 6.3);
  var seaTac = new Branch('Seatac Airport', 3, 24, 1.2);
  var seaCen = new Branch('Seattle Center', 11, 38, 3.7);
  var capHill = new Branch('Capitol Hill', 20, 38, 2.3);
  var alki = new Branch('Alki', 2, 16, 4.6);

pike.sellCookies();
pike.render();
seaTac.sellCookies();
seaTac.render();
seaCen.sellCookies();
seaCen.render();
capHill.sellCookies();
capHill.render();
alki.sellCookies();
alki.render();

//
// var firPikUl = document.getElementById('firPik');
//
//
//
//   // var liEl = document.createElement('li');
//   // liEl.textContent = hours[i] + ": " + soldCook + " cookies";
//   // firPikUl.appendChild(liEl);
//   // console.log(runningTotal)
// }
//

//
// var seaAirUl = document.getElementById('seaAir');
//
// for (var i = 0; i < hours.length; i++) { // For appending the TH elements
//   var thEl = document.createElement('th');
//   thEl.textContent = cookiesSold(this);
//   seaAirUl.appendChild(liEl);
// }
//

//
// var seaCenUl = document.getElementById('seaCen');
//
// for (var i = 0; i <hours.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = hours[i] + ": " + cookiesSold(seaCen) + " cookies";
//   seaCenUl.appendChild(liEl);
// }
//
// var capHilUl = document.getElementById('capHil');
//
// for (var i = 0; i <hours.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = hours[i] + ": " + cookiesSold(capHil) + " cookies";
//   capHilUl.appendChild(liEl);
// }
//
// var alkiUl = document.getElementById('alki');
//
// for (var i = 0; i <hours.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = hours[i] + ": " + cookiesSold(alki) + " cookies";
//   alkiUl.appendChild(liEl);
// }
