type UserRole = "guest" | "member" | "admin"
let userId: number | any = 1
type User = {
    id: number
    username: string
    role: UserRole
}

const users: User[] = [
    {id: userId++, username: "John_doe", role: "member"},
    {id: userId++, username: "admin_john", role: "admin"},
    {id: userId++, username: "guest_john", role: "guest"},
    {id: userId++, username: "guest_john", role: "guest"},
    {id: userId++, username: "guest_john", role: "guest"},
    {id: userId++, username: "guestxc_john", role: "guest"},
    {id: userId++, username: "guestcx_john", role: "guest"},
    {id: userId++, username: "guecxcst_john", role: "guest"},
    {id: userId++, username: "Ronnie", role: "guest"},
]

function updateUser(id: number, updates: any) {
    let user = users.find(user => user.id === id)
    if(!user) {
        console.error(`User the the user id ${id} is not found`)
        return
    }
    Object.assign(user, updates)
}

updateUser(1, {username: "Ronnie"});
updateUser(1, {role: "Ronnie"});
console.log(users)
// console.log(users)

// export function fetchUserDetail(username: string): User {
//     const user = users.find(user => user.username.toLowerCase() === username.toLowerCase())
//     if (!user) {
//         throw new TypeError(`User with username ${username} is not found`)
//     }
//     console.log(user)
//     return user
// }
// export function findMembers() {
//     let type = "guest"
//     let user = users.filter(user => user.role === type)
//     console.log(user)
// }