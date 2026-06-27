const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Vegetarian", price: 10},
    {name: "Hawaiian", price: 9}
]

const cashInRegister = 100;
const orderQueue = [];
const nextOrderId = 1;

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price;
    const newOrder =  {
        id: nextOrderId++, pizza: selectedPizza, status: "ordered", 
    }
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId) {
    const completedOrder = orderQueue.find(orderId => orderId.id = orderId)
    completedOrder.status === "completed";

    return completedOrder;
}

addNewPizza({name: "Chicken Bacon Ranch", cost: 12})
addNewPizza({name: "Chicken  Ranch", cost: 12})
addNewPizza({name: "Chicken Bacon ", cost: 12})

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu ", menu)
console.log("Cash in regster: ", cashInRegister)
console.log("OrderQueue: ", orderQueue)