class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        if (!this.validateId(id)) {
            throw new Error("Invalid ID: Employee ID must be a positive non-zero number.");
        }

        if (!this.validateSalary(salary)) {
            throw new Error("Invalid Salary: Salary must be a positive non-zero number.");
        }

        if (!this.validateGender(gender)) {
            throw new Error("Invalid Gender: Gender must be 'M' or 'F'.");
        }

        if (!this.validateStartDate(startDate)) {
            throw new Error("Invalid Date: Start Date cannot be in the future.");
        }

        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
    }

    // Validation Functions
    validateId = (id) => /^[1-9][0-9]*$/.test(id);
    validateSalary = (salary) => /^[1-9][0-9]*$/.test(salary);
    validateGender = (gender) => /^(M|F)$/.test(gender); // Gender must be 'M' or 'F'
    validateStartDate = (startDate) => new Date(startDate) <= new Date(); // Date should not be in the future

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

try {
    const emp1 = new EmployeePayroll(101, "Riya", 50000, "F", "2023-06-15");
    console.log(emp1.getDetails());

    const emp2 = new EmployeePayroll(102, "Rahul", 60000, "M", "2022-09-10");
    console.log(emp2.getDetails());
 
    const emp3 = new EmployeePayroll(103, "Gogo", 0, "F", "2024-01-10");
    console.log(emp3.getDetails());
 
    const emp4 = new EmployeePayroll(104, "Daisy", 55000, "X", "2024-02-15");
    console.log(emp4.getDetails());

  
    const emp5 = new EmployeePayroll(105, "Yash", 60000, "M", "2026-01-01");
    console.log(emp5.getDetails());

} catch (error) {
    console.error(error.message);
}