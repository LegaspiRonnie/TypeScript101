const gameScores = [1, 2, 3, 4, 5]
const favoriteThings = ["raindrops and rose", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"]
const voters = [{name: "Alice", age: 42}, {name: "Bob", age: 77}]

function getLastItem<T>(array: T[]): T | undefined{
     
    let last_value = array[array.length - 1]
    console.log(last_value)
    return last_value
}

getLastItem(gameScores)
getLastItem(favoriteThings)
getLastItem(voters)