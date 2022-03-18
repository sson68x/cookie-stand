'use strict';

let cookieSection = document.getElementById('stores-profiles');
let storeForm = documnet.getElementById('stores-form')

function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeLocations = [];
let combinedTotalCookies = 0;

function Location(city, minCustomers, maxCustomers, avgCookies) {
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  storeLocations.push(this);
}

Location.prototype.customersData = function () {
  for (let i = 0; i < storeHours.length; i++) {
    this.customersPerHour.push(randomCustomer(this.minCustomers, this.maxCustomers));
  }
}

Location.prototype.cookiesData = function () {
  for (let i = 0; i < storeHours.length; i++) {
    let cookiesSold = Math.floor(this.avgCookies * this.customersPerHour[i]);
    this.cookiesPerHour.push(cookiesSold);
    this.totalCookies += cookiesSold;
  }
}

Location.prototype.render = function () {
  let tableElem = document.createElement('table');
  cookieSection.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let thElem1 = document.createElement('th');
  thElem1.textContent = this.city;
  row1.appendChild(thElem1);

  for (let i = 0; i < storeHours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookiesPerHour[i]}`;
    row1.appendChild(tdElem);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = `${this.totalCookies}`;
  row1.appendChild(tdElem);
}

new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

function firstRow() {
  let tableElem = document.createElement('table');
  cookieSection.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let locationCell = document.createElement('th');
  locationCell.textContent = 'Location';
  row1.appendChild(locationCell);

  for (let i = 0; i < storeHours.length; i++) {
    let timeElem = document.createElement('th');
    timeElem.textContent = `${storeHours[i]}`;
    row1.appendChild(timeElem);
  }

  let totalCell = document.createElement('th');
  totalCell.textContent = 'Daily Location Total';
  row1.appendChild(totalCell);
}

function lastRow() {
  let tableElem = document.createElement('table');
  cookieSection.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let totalElem = document.createElement('th');
  totalElem.textContent = 'Totals';
  row1.appendChild(totalElem);

  for (let i = 0; i < storeHours.length; i++) {
    let totalHourElem = document.createElement('td');
    totalHourElem.textContent = `${storeLocations[0].cookiesPerHour[i] + storeLocations[1].cookiesPerHour[i] + storeLocations[2].cookiesPerHour[i] + storeLocations[3].cookiesPerHour[i] + storeLocations[4].cookiesPerHour[i]}`;
    row1.appendChild(totalHourElem);
  }

  let combinedTotalElem = document.createElement('td');
  combinedTotalElem.textContent = `${storeLocations[0].totalCookies + storeLocations[1].totalCookies + storeLocations[2].totalCookies + storeLocations[3].totalCookies + storeLocations[4].totalCookies}`;
  row1.appendChild(allTotalElem);
}

function renderAllLocations() {
  for (let i = 0; i < storeLocations.length; i++) {
    storeLocations[i].customersData();
    storeLocations[i].cookiesData();
    storeLocations[i].render();
  }
}

firstRow();
renderAllLocations();
lastRow();

function storeSubmit(event) {
  event.preventDefault();
  let city = event.target.locationName.value;
  let minCustomers = event.target.minCust.value;
  let maxCustomers = event.target.maxCust.value;
  let avgCookies = event.target.avgCookies.value;

  let newLocation = new Location(city, minCustomers, maxCustomers, avgCookies);

  let deleteElem = document.getElementById('stores-profiles').lastChild;
  cookieSection.removeChild(deleteElem);

  combinedTotalCookies = 0;
  newLocation.customerData();
  newLocation.cookiesData();
  newLocation.render();
  lastRow();
}

storeForm.addEventListner('submit', handleSubmit);