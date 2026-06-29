type Address = {
        street: string,
        city: string,
        country: string
    }

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address?: Address
}
let person1: Person = {
    name: "Ronnie",
    age: 23,
    isStudent: true,
    
}

console.log(person1)
if (person1.address === undefined) {
    console.log(`${person1.name} has no given address`)
} else {
    console.log(person1.address)
}
