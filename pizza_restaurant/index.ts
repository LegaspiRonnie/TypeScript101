let pizzaId: number = 1;
type Pizza = {
    id: number | null;
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: Pizza;
    status: OrderStatus;
}
type OrderStatus = "ordered" | "completed"


let menu: Pizza[] =  [
    {id: pizzaId++, name: "Margherita", price: 8},
    {id: pizzaId++, name: "Margherita", price: 8},
    {id: pizzaId++, name: "Margherita", price: 8},
]


let cashInRegister: number = 100
let nextOrderId: number = 1
let orderHistory: Order[] = []




function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} is not in the list`)
        return
    }
    cashInRegister += selectedPizza.price

    const newOrder: Order = {
        id: nextOrderId++,
        pizza: {
            id: selectedPizza.id,
            name: selectedPizza.name,
            price: selectedPizza.price,
        },
        status: "ordered",
    }

    orderHistory.push(newOrder)
    return newOrder

}

function completeOrder(orderId: number): Order | undefined{
    const order = orderHistory.find(order => order.id === orderId)
    if (order == undefined) {
        console.log("Order Undefined")
        return
    }
    order.status = 'completed'
    
    return order
} 
export function getPizzaDetail(identifier: number | string): Pizza | undefined{
    let pizza = 
        typeof identifier === 'string'
            ? menu.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLowerCase()) 
            : menu.find(pizza => pizza.id === identifier);
    if (!pizza) {
        throw new Error("Pizza not found")
    }

    console.log(pizza)
    return pizza
}
// getPizzaDetail(1)

// getPizzaDetail("sfdfdf")

function addNewPizza(pizzaObj: Omit<Pizza, "id"> ): Pizza {
    let pizza: Pizza = {
        id: pizzaId++,
        ...pizzaObj
    }
    
    menu.push(pizza)
    return pizza

}

addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "Chicken Bacon Ranch", price: 12})
console.log(menu)

// addNewPizza({id: 6, name: "Chicken  Ranch", price: 12})
// addNewPizza({id: 7, name: "Chicken Bacon", price: 12})

// placeOrder("Pepperoni")
// completeOrder(1)

// placeOrder("Chicken Bacon")
// completeOrder(2)
console.log(menu);

// console.log(`total cost: ${cashInRegister}`)
// console.log(orderHistory)


// console.log(menu[0])