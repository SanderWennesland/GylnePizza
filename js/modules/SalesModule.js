var pizzaMenu = {
    pizza: ['Carne Di Pentito', 'Cheese', 'Deluxe Pepperoni', 'Christian Spesial'],
    price: [198, 129, 168, 178]
};

 var drinkMenu = {
    drink: ['Pepsi Max', 'Coca Cola', 'Mango Ipa', 'Imsdal'],
    price: [25.90, 25.90, 36.90, 25.90],
};

 export var salesObject = {
    dailySale: [],
    dailyPizzaSale: [],
    dailyDrinkSale: [],
    totalTurnover: []
};

export function generateDailySales() {
    for(var i in pizzaMenu.pizza) {
        salesObject.dailyPizzaSale.push(Math.round(Math.random() * 120));
        salesObject.dailyDrinkSale.push(Math.round(Math.random() * 80));
    }
    salesObject.dailySale.push(salesObject.dailyPizzaSale[i] + salesObject.dailyDrinkSale[i]);
}

export function calcDailyTurnover() {
    var dailyPizzaTurnover = 0;
    var dailyDrinkTurnover = 0;
    var totalTurnOver = 0;
    for(var i in pizzaMenu.price) {
        dailyPizzaTurnover += pizzaMenu.price[i] * salesObject.dailyPizzaSale[i];
        dailyDrinkTurnover += drinkMenu.price[i] * salesObject.dailyDrinkSale[i];

        totalTurnOver = dailyPizzaTurnover + dailyDrinkTurnover;
        
    } 
    salesObject.totalTurnover.push(totalTurnOver.toFixed(2));
    console.log("Omsetning i dag = " + totalTurnOver.toFixed(2) + " kr");
    console.log("Pizza har blitt solgt for  " + dailyPizzaTurnover.toFixed(2) + " kr");
    console.log("Drikke har blitt solgt for  " + dailyDrinkTurnover.toFixed(2) + " kr")
}

