'use strict'
var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
'16:00', '17:00', '18:00', '19:00'];
var branches = [];

var header = new function() { //Creates header
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
}

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
}

function renderAll() {
  for (var i = 0; i < branches.length; i++) {
    branches[i].render();
  };

}

// var employees = new function() { // Create the employee table
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = this.name;
//   trEl.appendChild(tdEl);
// }
//
// EmpCalc is solid
// Branch.prototype.empCalc = function() { // Create the employee array
//   for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
//     this.empWork = Math.ceil(this.cookiesSoldEachHour[i] / 20);
//     if (this.empWork < 2) {
//       this.empWork = 2;
//     };
//     this.empNeed.push(this.empWork);
//   };
// }
//
// Branch.prototype.payroll = function() { //Appending the employee array
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = this.name;
//   trEl.appendChild(tdEl);
//   for (var i = 0; i < this.empNeed.length; i++) {
//     tdEl = document.createElement('td');
//     tdEl.textContent = this.empNeed[i];
//     trEl.appendChild(tdEl);
//   };
//   cookies.appendChild(trEl)
// }

var pike = new Branch('1st and Pike', 23, 65, 6.3);
var seaTac = new Branch('Seatac Airport', 3, 24, 1.2);
var seaCen = new Branch('Seattle Center', 11, 38, 3.7);
var capHill = new Branch('Capitol Hill', 20, 38, 2.3);
var alki = new Branch('Alki', 2, 16, 4.6);

renderAll();

// pike.empCalc()
// pike.payroll()

var newLoc = document.getElementById('newBranch');

function handleNewBranch(event) {
  event.preventDefault();
  var newName = event.target.name.value;
  var newMin = event.target.min.value;
  var newMax = event.target.max.value;
  var newAvg = event.target.avg.value;
  var newBranch = new Branch(newName, newMin, newMax, newAvg);
  newBranch.render();
  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
};

newLoc.addEventListener('submit', handleNewBranch);
