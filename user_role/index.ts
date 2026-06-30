type UserRole = "guest" | "member" | "admin"
let nextUserId: number | any = 1


type User = {
    id: number
    username: string
    role: UserRole
}
 
type UpdatedUser = Partial<User> 
const users: User[] = [
    {id: nextUserId++, username: "John_doe", role: "member"},
    {id: nextUserId++, username: "admin_john", role: "admin"},
    {id: nextUserId++, username: "guest_john", role: "guest"},
    {id: nextUserId++, username: "guest_john", role: "guest"},
    {id: nextUserId++, username: "guest_john", role: "guest"},
    {id: nextUserId++, username: "guestxc_john", role: "guest"},
    {id: nextUserId++, username: "guestcx_john", role: "guest"},
    {id: nextUserId++, username: "guecxcst_john", role: "guest"},
    {id: nextUserId++, username: "Ronnie", role: "guest"},
]

function updateUser(id: number, updates: any) {
    let user = users.find(user => user.id === id)
    if(!user) {
        console.error(`User the the user id ${id} is not found`)
        return
    }
    Object.assign(user, updates)
}

// updateUser(1, {username: "Ronnie"});
// updateUser(1, {role: "Ronnie"});
// console.log(users)
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

function addNewUser(newUser: any): User  {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    
    users.push(user)
    return user

    
}


addNewUser({username: "Ronnie", role: "member"})
console.log(users)
