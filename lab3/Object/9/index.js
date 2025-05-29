function Employee(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this. salary = salary;
    this.displayInfo = function() {
        console.log(`Name: ${this.name}; Department: ${this.department}; Phone: ${this.phone}; Salary: ${this.salary} руб.`);
    };
}

let employee = new Employee("Kirill", "IT", "8-900-123-23-23", 1);
employee.displayInfo();