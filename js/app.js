'use strict';

let cookieSalmon = document.getElementById('location-profiles');

console.dir(cookieSalmon);

function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  cookiesArr: [],
  custArray: [],
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cust = randomCust(23, 65);
      this.custArray.push(cust)
    }
    console.log(this.custArray);
  },
  cookiesSold: function () {
    this.custPerHour()
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.custArray[i]);
      this.cookiesArr.push(cookies)
      this.totalCookies += cookies
    }
    console.log(this.totalCookies)
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
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesArr[i]} cookies.`
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
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  totalCookies: 0,
  cookiesArr: [],
  custArray: [],
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cust = randomCust(3, 24);
      this.custArray.push(cust)
    }
    console.log(this.custArray);
  },
  cookiesSold: function () {
    this.custPerHour()
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.custArray[i]);
      this.cookiesArr.push(cookies)
      this.totalCookies += cookies
    }
    console.log(this.totalCookies)
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
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesArr[i]} cookies.`
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
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  totalCookies: 0,
  cookiesArr: [],
  custArray: [],
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cust = randomCust(11, 38);
      this.custArray.push(cust)
    }
    console.log(this.custArray);
  },
  cookiesSold: function () {
    this.custPerHour()
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.custArray[i]);
      this.cookiesArr.push(cookies)
      this.totalCookies += cookies
    }
    console.log(this.totalCookies)
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
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesArr[i]} cookies.`
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
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  totalCookies: 0,
  cookiesArr: [],
  custArray: [],
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cust = randomCust(20, 38);
      this.custArray.push(cust)
    }
    console.log(this.custArray);
  },
  cookiesSold: function () {
    this.custPerHour()
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.custArray[i]);
      this.cookiesArr.push(cookies)
      this.totalCookies += cookies
    }
    console.log(this.totalCookies)
  },
  render: function () {
    this.cookiesSold()
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
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesArr[i]} cookies.`
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
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  totalCookies: 0,
  cookiesArr: [],
  custArray: [],
  custPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cust = randomCust(2, 16);
      this.custArray.push(cust)
    }
    console.log(this.custArray);
  },
  cookiesSold: function () {
    this.custPerHour()
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.floor(this.avgCookies * this.custArray[i]);
      this.cookiesArr.push(cookies)
      this.totalCookies += cookies
    }
    console.log(this.totalCookies);
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
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesArr[i]} cookies.`
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.totalCookies} cookies.`
    ulElem.appendChild(totalElem);
  }
}

lima.render();