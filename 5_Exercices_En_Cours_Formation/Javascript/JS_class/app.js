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

class HospitalEmployee {
    constructor(name, occupation) {
        this.name = name,
        this.occupation= occupation,
        this.vacationDays = 99
        }
  
}




takeVacationDays = (day) => typeof day === "number"? vacationDays -= dayoff:console.log('days off must be numbers');

class Surgeon extends HospitalEmployee {
    constructor(name, occupation, department) {
        super(name, occupation)
        this.department = department
    }

}

const surgeonJohn = new Surgeon("John","Surgeon","Cardiovascular");

surgeonJohn.takeVacationDays(6);    

console.log(surgeonJohn);
