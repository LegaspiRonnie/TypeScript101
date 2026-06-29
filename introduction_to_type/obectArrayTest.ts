type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Ronnie",
    age: 23,
    isStudent: true

}
let person2: Person = {
    name: "Ronnie",
    age: 23,
    isStudent: true

}
let person3: Person = {
    name: "Ronnie",
    age: 23,
    isStudent: true

}

let people: Person[] = [person1, person2, person3]
console.log(people)