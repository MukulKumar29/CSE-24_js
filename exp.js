// Array to store employees
let employees = [];


function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };

    employees.push(emp);
    alert("Employee Added!");

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

// Display All Employees
function displayEmployees() {
    let output = "<h3>All Employees</h3>";

    for (let emp of employees) {
        output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}, Dept: ${emp.department} <br>`;
    }

    document.getElementById("output").innerHTML = output;
}

// Filter Salary > 50000
function filterEmployees() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h3>Employees with Salary > 50000</h3>";

    for (let emp of filtered) {
        output += `Name: ${emp.name}, Salary: ${emp.salary} <br>`;
    }

    document.getElementById("output").innerHTML = output;
}

// Total Salary
function totalSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        "<h3>Total Salary: ₹" + total + "</h3>";
}

// Average Salary
function averageSalary() {
    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = employees.length ? total / employees.length : 0;

    document.getElementById("output").innerHTML =
        "<h3>Average Salary: ₹" + avg.toFixed(2) + "</h3>";
}

// Count by Department
function countDepartment() {
    let deptName = prompt("Enter Department Name:");

    let count = 0;

    for (let emp of employees) {
        if (emp.department.toLowerCase() === deptName.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        `<h3>Employees in ${deptName}: ${count}</h3>`;
}