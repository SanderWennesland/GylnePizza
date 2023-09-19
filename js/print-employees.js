import { EmployeeModule } from './modules/EmployeeModule.js';

const employeeSection = document.querySelector("#employee-section");
const filterEmployeeBjerke = document.querySelector(".bjerke");
const filterEmployeeGamlebyen = document.querySelector(".gamlebyen");
const allEmployes = document.querySelector(".all");
const filterEmployeeMajorstuen = document.querySelector(".majorstuen");
const filterEmployeeSagene = document.querySelector(".sagene");

//************************* Filter Bjerke *************************

const btnBjerke = () => {
    const filterBjerke = EmployeeModule.getAllEmployees().filter(employee => employee.restaurant === "Bjerke")
    console.log(filterBjerke.length)
    if (filterBjerke.length !== 0) {
        let htmlTxt = "";
        filterBjerke.forEach(employees => {
            htmlTxt += `
                <article class="column is-one-third">
                    <div class="card employees">
                        <figure class="image is-1by1">
                            <img src="images/Ansatte/${employees.image}" alt="bilde av ${employees.name}">
                        </figure>
                        <div class="media-content">
                            <p class="employee-info">
                                Navn: ${employees.name} <br>
                                Rolle: ${employees.role} <br>
                                Filial: ${employees.restaurant} <br>
                            </p>
                        </div>
                    </div>
                </article>
                `
        })
        employeeSection.innerHTML = htmlTxt;
    }
};

filterEmployeeBjerke.onclick = btnBjerke;

//************************* Filter Gamlebyen *************************

const btnGamlebyen = () => {
    const filterGamlebyen = EmployeeModule.getAllEmployees().filter(employee => employee.restaurant === "Gamlebyen")
    console.log(filterGamlebyen.length)
    if (filterGamlebyen.length !== 0) {
        let htmlTxt = "";
        filterGamlebyen.forEach(employees => {
            htmlTxt += `
                <article class="column is-one-third">
                    <div class="card employees">
                        <figure class="image is-1by1">
                            <img src="images/Ansatte/${employees.image}" alt="bilde av ${employees.name}">
                        </figure>
                        <div class="media-content">
                            <p class="employee-info">
                                Navn: ${employees.name} <br>
                                Rolle: ${employees.role} <br>
                                Filial: ${employees.restaurant} <br>
                            </p>
                        </div>
                    </div>
                </article>
                `
        })
        employeeSection.innerHTML = htmlTxt;
    }
};

filterEmployeeGamlebyen.onclick = btnGamlebyen;

//************************* All Employees *************************

const btnAll = () => {
    let htmlTxt = "";
    EmployeeModule.getAllEmployees().forEach(employees => {
        htmlTxt += `
        <article class="column is-one-third">
            <div class="card employees">
                
                    <figure class="image is-1by1">
                        <img src="images/Ansatte/${employees.image}" alt="bilde av ${employees.name}">
                    </figure>
                
                <div class="media-content">
                    <p class="employee-info">
                        Navn: ${employees.name} <br>
                        Rolle: ${employees.role} <br>
                        
                    </p>
                    <div class="restaurant-symbol-container">
                        <div class="${employees.restaurant}-shape"></div>
                        <p class="${employees.restaurant}-init-letter">${employees.restaurant.substring(0, 1)}</p>
                        <p class="restaurant-symbol-name">${employees.restaurant}</p>
                    </div>
                </div>
            </div>
        </article>

    
    `;
        employeeSection.innerHTML = htmlTxt;
    })

};
allEmployes.onclick = btnAll;

//************************* Filter Gamlebyen *************************

const btnMajorstuen = () => {
    const filterMajorstuen = EmployeeModule.getAllEmployees().filter(employee => employee.restaurant === "Majorstuen")
    console.log(filterMajorstuen.length)
    if (filterMajorstuen.length !== 0) {
        let htmlTxt = "";
        filterMajorstuen.forEach(employees => {
            htmlTxt += `
                <article class="column is-one-third">
                    <div class="card employees">
                        <figure class="image is-1by1">
                            <img src="images/Ansatte/${employees.image}" alt="bilde av ${employees.name}">
                        </figure>
                        <div class="media-content">
                            <p class="employee-info">
                                Navn: ${employees.name} <br>
                                Rolle: ${employees.role} <br>
                                Filial: ${employees.restaurant} <br>
                            </p>
                        </div>
                    </div>
                </article>
                `
        })
        employeeSection.innerHTML = htmlTxt;
    }
};

filterEmployeeMajorstuen.onclick = btnMajorstuen;


//************************* Filter Sagene *************************

const btnSagene = () => {
    const filterSagene = EmployeeModule.getAllEmployees().filter(employee => employee.restaurant === "Sagene")
    console.log(filterSagene.length)
    if (filterSagene.length !== 0) {
        let htmlTxt = "";
        filterSagene.forEach(employees => {
            htmlTxt += `
                <article class="column is-one-third">
                    <div class="card employees">
                        <figure class="image is-1by1">
                            <img src="images/Ansatte/${employees.image}" alt="bilde av ${employees.name}">
                        </figure>
                        <div class="media-content">
                            <p class="employee-info">
                                Navn: ${employees.name} <br>
                                Rolle: ${employees.role} <br>
                                Filial: ${employees.restaurant} <br>
                            </p>
                        </div>
                    </div>
                </article>
                `
        })
        employeeSection.innerHTML = htmlTxt;
    }
};

filterEmployeeSagene.onclick = btnSagene;




let htmlTxt = "";
EmployeeModule.getAllEmployees().forEach(employees => {
    htmlTxt += `
    <article class="column is-one-third">
    <div class="card employees">
        
            <figure class="image is-1by1">
                <img src="images/Ansatte/${employees.image}" alt="bilde av ${employees.name}">
            </figure>
        
        <div class="media-content">
            <p class="employee-info">
                Navn: ${employees.name} <br>
                Rolle: ${employees.role} <br>
                
            </p>
            <div class="restaurant-symbol-container">
                <div class="${employees.restaurant}-shape"></div>
                <p class="${employees.restaurant}-init-letter">${employees.restaurant.substring(0, 1)}</p>
                <p class="restaurant-symbol-name">${employees.restaurant}</p>
            </div>
        </div>
    </div>
    </article>

    
    `;
    employeeSection.innerHTML = htmlTxt;
})