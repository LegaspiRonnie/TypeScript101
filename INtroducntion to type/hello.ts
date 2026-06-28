type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        street: string,
        city: string,
        country: string
    }
}
let person1: Person = {
    name: "Ronnie",
    age: 23,
    isStudent: true,
    address: {
        street: "test",
        city: "poz",
        country: "Phi"
         
    }
}

console.log(person1)