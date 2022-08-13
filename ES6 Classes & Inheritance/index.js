console.log("This is tut 31");

class Employee{

    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`
    }

    joiningYear(){
        return 2022 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

let netra = new Employee("Netra", 2, "Division");
// console.log(netra);
// console.log(netra.joiningYear());
// console.log(Employee.add(2, 12));

// Inheritance 

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'Python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

let rohan = new Programmer('Rohan', 3, 'Lays', 'Go', 'Rohan420') 
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.multiply(5, 7));