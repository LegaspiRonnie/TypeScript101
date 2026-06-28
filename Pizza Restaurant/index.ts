type Pizza = {
    name: string;
    price: number;
};

type Queue = {
    id: number;
    pizza: string;
    status: string;
}

let menu: Pizza[] =  [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 8},
    {name: "Hawaian", price: 8},
    {name: "Veggie", price: 8},
]

let cashInRegister: number = 100
let nextOrderId: number = 1
let orderQueue: Queue[] = []


function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)

}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} is not in the list`)
        return
    }
    cashInRegister += selectedPizza.price

    const newOrder: Queue = {
        id: nextOrderId++,
        pizza: selectedPizza.name,
        status: "ordered",
    }

    orderQueue.push(newOrder)
    return newOrder

}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (order == undefined) {
        console.log("Order Undefined")
        return
    }
    order.status = 'completed'
    return order
} 

addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "Chicken  Ranch", price: 12})
addNewPizza({name: "Chicken Bacon ", price: 12})

placeOrder("Pepperoni")
completeOrder(1)
console.log(menu);
console.log(cashInRegister)
console.log(orderQueue)
