'use strict';

let cookieSalmon = document.getElementById('stores-profiles');

function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  cookiesArray: [],
  customersArray: [],
  customersPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customers = randomCustomer(23, 65);
      this.customersArray.push(customers)
    }
  },
  cookiesSold: function () {
    this.customersPerHour()
    for (let i = 0; i < storeHours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.customersArray[i]);
      this.cookiesArray.push(cookies)
      this.totalCookies += cookies
    }
  },
// ********** NEW ************
//   cookiesSold: function() {
//     for(let i = 0; i < hours.length; i++) {
//     this.cookiesArray.push(Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookies));
//     this.totalCookies += this.cookiesArray[i];
//     }
//   },
// *********** NEW ***********

  render: function () {
    let articleElem = document.createElement('article');
    cookieSalmon.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.cookiesSold()
    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesArray[i]} cookies.`
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.totalCookies} cookies.`
    ulElem.appendChild(totalElem);
  }
}

seattle.render();

let tokyo = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  totalCookies: 0,
  cookiesArray: [],
  customersArray: [],
  customersPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customers = randomCustomer(3, 24);
      this.customersArray.push(customers)
    }
  },
  cookiesSold: function () {
    this.customersPerHour()
    for (let i = 0; i < storeHours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.customersArray[i]);
      this.cookiesArray.push(cookies)
      this.totalCookies += cookies
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    cookieSalmon.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.cookiesSold()
    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesArray[i]} cookies.`
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.totalCookies} cookies.`
    ulElem.appendChild(totalElem);
  }
}

tokyo.render();

let dubai = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  totalCookies: 0,
  cookiesArray: [],
  customersArray: [],
  customersPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customers = randomCustomer(11, 38);
      this.customersArray.push(customers)
    }
  },
  cookiesSold: function () {
    this.customersPerHour()
    for (let i = 0; i < storeHours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.customersArray[i]);
      this.cookiesArray.push(cookies)
      this.totalCookies += cookies
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    cookieSalmon.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.cookiesSold()
    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesArray[i]} cookies.`
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.totalCookies} cookies.`
    ulElem.appendChild(totalElem);
  }
}

dubai.render();

let paris = {
  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  totalCookies: 0,
  cookiesArray: [],
  customersArray: [],
  customersPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customers = randomCustomer(20, 38);
      this.customersArray.push(customers)
    }
  },
  cookiesSold: function () {
    this.customersPerHour()
    for (let i = 0; i < storeHours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.customersArray[i]);
      this.cookiesArray.push(cookies)
      this.totalCookies += cookies
    }
  },
  render: function () {
    this.cookiesSold()
    let articleElem = document.createElement('article');
    cookieSalmon.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

  let locationCell = document.createElement('th');
  locationCell.textContent = 'Location';
  row1.appendChild(locationCell);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.cookiesSold()
    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesArray[i]} cookies.`
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.totalCookies} cookies.`
    ulElem.appendChild(totalElem);
  }
}

paris.render();

let lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  totalCookies: 0,
  cookiesArray: [],
  customersArray: [],
  customersPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      let customers = randomCustomer(2, 16);
      this.customersArray.push(customers)
    }
  },
  cookiesSold: function () {
    this.customersPerHour()
    for (let i = 0; i < storeHours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.customersArray[i]);
      this.cookiesArray.push(cookies)
      this.totalCookies += cookies
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    cookieSalmon.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    articleElem.appendChild(h2Elem);

    let pElem = document.createElement('p');
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    this.cookiesSold()
    for (let i = 0; i < storeHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.cookiesArray[i]} cookies.`
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.totalCookies} cookies.`
    ulElem.appendChild(totalElem);
  }
}

lima.render();