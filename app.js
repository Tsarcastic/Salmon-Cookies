'use strict'

var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
'16:00', '17:00', '18:00', '19:00'];
var branches = [];

function renderHeader() { //Creates header
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = "Location";
  trEl.append(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];;
    trEl.appendChild(thEl);
  };
  thEl = document.createElement('th');
  thEl.textContent = 'Today\'s Total';
  trEl.appendChild(thEl);
  cookies.appendChild(trEl)
}

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
  this.empWork = 0
  this.empNeed = [];
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
};

Branch.prototype.render = function() {
  this.sellCookies();
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
};

function renderBody() {
  for (var i = 0; i < branches.length; i++) {
    branches[i].render();
  };
};

var pike = new Branch('1st and Pike', 23, 65, 6.3);
var seaTac = new Branch('Seatac Airport', 3, 24, 1.2);
var seaCen = new Branch('Seattle Center', 11, 38, 3.7);
var capHill = new Branch('Capitol Hill', 20, 38, 2.3);
var alki = new Branch('Alki', 2, 16, 4.6);

function renderFooter() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);

  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    console.log(i)
    hourlyTotal = 0;
    thEl = document.createElement('th');
    for (var j = 0; j < branches.length; j++){
      hourlyTotal += branches[j].cookiesSoldEachHour[i];
      console.log("The hourly total is " + hourlyTotal + " on " + " iteration")
      totalOfTotals += branches[j].cookiesSoldEachHour[i];
    };
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  };
  thEl = document.createElement('thEl');
  thEl.textContent = totalOfTotals;
  trEl.appendChild(thEl);
  cookies.appendChild(trEl);
};

function fullRender() {
  renderHeader();
  renderBody();
  renderFooter();
}

fullRender();
//End of footer

var newLoc = document.getElementById('newBranch');
var myTable = document.getElementById('cookies');

function handleNewBranch(event) {
  event.preventDefault();
  var newName = event.target.name.value;
  var newMin = parseInt(event.target.min.value);
  var newMax = parseInt(event.target.max.value);
  var newAvg = parseInt(event.target.avg.value);
  var newBranch = new Branch(newName, newMin, newMax, newAvg);
  newBranch.render();
  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
  myTable.innerHTML = " ";
  fullRender();
};

newLoc.addEventListener('submit', handleNewBranch);
