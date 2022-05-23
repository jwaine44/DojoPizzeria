function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("stuffed", "white", "mozzarella", ["clams", "bacon"]);
console.log(pizza3);

var pizza4 = pizzaOven("croissant", "marinara", "cheddar", ["eggs", "bacon", "sausage"]);
console.log(pizza4);

function randomPizza(crustType, sauceType, cheeses, toppings) {
    var randompizza = {};
    randompizza.crustType = Math.Random;
    randompizza.sauceType = Math.Random;
    randompizza.cheeses = Math.Random;
    randompizza.toppings = Math.Random;
    return randompizza;
}

console.log(randomPizza());