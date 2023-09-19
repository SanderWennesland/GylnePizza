import { RestaurantModule } from './modules/RestaurantsModule.js';
import { EmployeeModule } from './modules/EmployeeModule.js';
import * as SalesModule from './modules/SalesModule.js';

const restaurantsSection = document.querySelector("#restaurants-section");

SalesModule.generateDailySales();
SalesModule.calcDailyTurnover();

const employees = EmployeeModule.getAllEmployees();

// Funksjon for å telle hvor mange ansatte som jobber på hver filial

let count = {};
for(let i = 0; i < employees.length; i++) {
  count[employees[i]['restaurant']] = 1 + (count[employees[i]['restaurant']] || 0);
}

// Printer ut restauranter 

let omsetning = Math.round(Math.random() * (120000 - 30000 + 1)) + 30000;

let htmlTxt = "";
RestaurantModule.getAllRestaurants().forEach( restaurants => {
  htmlTxt += `
    
     
        <article class="column is-half">
          <div class="cards">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="images/Restauranter/${restaurants.image}">
              </figure>
            </div>
            <div class="media-content">
              <h2 class="title is-3">${restaurants.location}</h2>
              <button class="button accordion noSelect">Info om filialen</button>
            <div class="panel">
                <p>Adresse: ${restaurants.address}<br>
                  Ansatte: ${count[restaurants.location]}<br>
                  Omsetning: ${omsetning.toFixed(2)} <br>
                  Tidligere kvartal: 
                </p>
            </div>
          </div>
        </article>
    
   
    `;
    restaurantsSection.innerHTML = htmlTxt;
})





