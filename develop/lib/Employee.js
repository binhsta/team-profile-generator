// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email;
    }
// functions to get info
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;