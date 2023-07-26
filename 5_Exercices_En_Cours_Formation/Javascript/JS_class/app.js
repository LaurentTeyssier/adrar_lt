// class Imc {
//     constructor(name, weight, height){
//         this.name = name,
//         this.weight = weight,
//         this.height = height
//     }

//     getImc() {
//         return (this.weight / (this.height*this.height)).toFixed(2);
//     }

//     display() {
//         console.log(`${this.name} (${this.weight}kg, ${this.height}m) a un IMC de : ${this.getImc()}`)
//     }
// }

// let list = [
//     new Imc("Sébasien Chabal", 135, 1.7),
//     new Imc("Escaladeuse", 45, 1.68),
//     new Imc("JOJO ", 300, 2),
//     new Imc("Gontrand ", 90, 1.75),
//     new Imc("Colonel Clock ", 200, 1.75),
//     new Imc("JOsiane de la Vega", 99, 1.55),
// ]

// list.forEach(elem => elem.display());

// class HospitalEmployee {
//     constructor(name, occupation) {
//         this.name = name,
//         this.occupation= occupation,
//         this.vacationDays = 99
//         }
  
// }




// takeVacationDays = (day) => typeof day === "number"? vacationDays -= dayoff:console.log('days off must be numbers');

// class Surgeon extends HospitalEmployee {
//     constructor(name, occupation, department) {
//         super(name, occupation)
//         this.department = department
//     }

// }

// const surgeonJohn = new Surgeon("John","Surgeon","Cardiovascular");

// surgeonJohn.takeVacationDays(6);    

// console.log(surgeonJohn);



class Pme {
    constructor(name, team, revenues, fixedCosts, productCosts) {
this.name = name,
this.team = team,
this.revenues = 300000,
this.fixedCosts = 20000,
this.productCosts = 50000
    }
initialCosts() {
    return this.fixedCosts + this.productCosts;
}
}



class Employee {
    constructor(firstName, lastName, age, salary){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.salary = salary,
        this.cost = this.calculCost();  
    }
    getCout() {
        return this.cost;
    }

    calculCost() {
        const months = 12;
        const charges = 1.9;

        return this.salary * charges * months

    }
}
const pme = new Pme ("my Small company", [new Employee
    ("Lucky", "Luke", 30, 2000), new Employee
    ('Calamity', 'Jane', 20, 3000), new Employee
    ('Billy', 'the kid', 17, 4000)], 300000, 20000, 50000);


const luckyLuke = new Employee ("Lucky", "Luke", 30, 2000);
const calamityJane = new Employee ('Calamity', 'Jane', 20, 3000);
const billyKid = new Employee ('Billy', 'the kid', 17, 4000);
console.log(luckyLuke);
console.log(calamityJane);
console.log(billyKid);