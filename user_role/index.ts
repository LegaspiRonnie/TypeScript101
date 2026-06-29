type UserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    {username: "John_doe", role: "member"},
    {username: "admin_john", role: "admin"},
    {username: "guest_john", role: "guest"},
    {username: "guest_john", role: "guest"},
    {username: "guest_john", role: "guest"},
    {username: "guestxc_john", role: "guest"},
    {username: "guestcx_john", role: "guest"},
    {username: "guecxcst_john", role: "guest"},
    {username: "guestxc_john", role: "guest"},
]

export function fetchUserDetail(username: string): User {
    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase())
    if (!user) {
        throw new TypeError(`User with username ${username} is not found`)
    }
    console.log(user)
    return user
}
// export function findMembers() {
//     let type = "guest"
//     let user = users.filter(user => user.role === type)
//     console.log(user)
// }