class EmployeePayroll {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
}

const emp1 = new EmployeePayroll(101, "Riya", 50000);
const emp2 = new EmployeePayroll(102, "Rahul", 60000);
const emp3 = new EmployeePayroll(103, "Yash", 55000);

const employees = [emp1, emp2, emp3];

employees.forEach(emp => console.log(emp.getDetails()));