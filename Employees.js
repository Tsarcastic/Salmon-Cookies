var employees = new function() { // Create the employee table
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
}

EmpCalc is solid
Branch.prototype.empCalc = function() { // Create the employee array
  for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
    this.empWork = Math.ceil(this.cookiesSoldEachHour[i] / 20);
    if (this.empWork < 2) {
      this.empWork = 2;
    };
    this.empNeed.push(this.empWork);
  };
}

Branch.prototype.payroll = function() { //Appending the employee array
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.empNeed.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.empNeed[i];
    trEl.appendChild(tdEl);
  };
  cookies.appendChild(trEl)
}

pike.empCalc()
pike.payroll()

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
