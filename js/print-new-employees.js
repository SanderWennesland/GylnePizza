import { EmployeeModule } from './modules/EmployeeModule.js';

const employeeSection = document.querySelector("#employee-section");
const allEmployes = document.querySelector(".all");

let htmlTxt = "";
EmployeeModule.getAllEmployees().forEach(employees => {
    htmlTxt += `
    <tr>
      <td><button class="delete"></button> ${employees.name}</td>
      <td>${employees.role}</td>
      <td>${employees.restaurant}</td>
    </tr>

    
    `;
    employeeSection.innerHTML = htmlTxt;
})