// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
function buy(id) {

        // Utilitzo un bucle "for ... in" per recorre l'objecte "products".
    for (let producte of products) {

        // Si el "id" sigui igual al id de l'arrai fiqui aquest al final de l'arrai "cartList".
        if (id === products.indexOf(producte) + 1) {
            cartList.push(producte);
        }
    };

        // Comprovació per mostrar la variable"cartList" per consola.
    // console.log(cartList);
};

// Exercise 2
function cleanCart() {

        // Per buidar la llista li dono un valor buit a la variable "cartList" (tal i com estaba a l'inici.).
    cartList = [];

        // Comprovació per mostrar la variable "cartList" per consola.
    // console.log(cartList);
};

    
// Exercise 3
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
function calculateSubtotals() {

        // Un bucle "for ... in" que pasa per tots els array de la variable "cartList"
    for (let producte of cartList) {

        // Si es troba amb algun array on el "type" sigui igual a 'grocery','beauty' o 'clothes' suma el valor de 'price' de la variable 'cartList' al valor que te 'value' en l'arrai corresponent a la variable 'subtotal'.        
        if (producte.type == 'grocery') {
            subtotal.grocery.value += producte.price;
        } else if (producte.type == 'beauty') {
            subtotal.beauty.value += producte.price;
        } else if (producte.type == 'clothes') {
            subtotal.clothes.value += producte.price;
        };
    };

        // Comprovació per mostrar la variable "subtotal" per consola.
    // console.log(subtotal);
};

// Exercise 4
    // Calculate total price of the cart either using the "cartList" array  
function calculateTotal() {

        // Un bucle "for ... in" que recorre l'array 'subtotal'
    for (let producte in subtotal){
        total += subtotal[producte].value;
    };

        // Comprovació per mostrar la variable "total" per consola.
    // console.log(total);
};

// Exercise 5
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
function generateCart() {

    for (let producte of cartList){

        // Comprovació de que NO existeix el producte a l'array 'cart' utilitzant '!' per a que en cas de que la comparació sigui positiva dongi negatiu i així afegir el producte de la 'cartList' a 'cart' i a més també afegir els apartats 'quantity' amb el valor 1 i 'subtotalWithDiscount' amb valor 0.
        if (!cart.some(nouPoducte => nouPoducte.name === producte.name)){
            cart.push(Object.assign(producte, {quantity: 1, subtotalWithDiscount: 0}));

        // En cas de que ja existeixi el producte en l'array 'cart' suma 1 al valor de l'apartat 'quantity'.
        } else {
            for (let nouPoducte of cart){
                if (producte.name === nouPoducte.name){
                    nouPoducte.quantity = nouPoducte.quantity + 1;
                }
            };
        }
    };

        // Comprovació per mostrar la variable "cart" per consola.
    // console.log(cart);
};

// Exercise 6
    // Apply promotions to each item in the array "cart"
function applyPromotionsCart() {

        // Amb el 'for ... in' recorrem l'array 'cart'
    for (let producte of cart){

        // Si el atribut 'name' de cada producte de l'array es igual a 'cooking oil' i a més l'atribut 'quantity' es igual o superior a 3 posa que el preu amb descompte (subtotalWithDiscount) sigui el total (preu per quantitat) menys 10.
        if (producte.name == 'cooking oil' && producte.quantity >= 3){
            producte.subtotalWithDiscount = (producte.price * producte.quantity) - 10;

        // Si el atribut 'name' de cada producte de l'array es igual a 'Instant cupcake mixture' i a més l'atribut 'quantity' es igual o superior a 10 posa que el preu amb descompte (subtotalWithDiscount) sigui 1/3 del total total (preu per quantitat).
        } else if (producte.name == 'Instant cupcake mixture' && producte.quantity >= 10){
            producte.subtotalWithDiscount = (producte.price * producte.quantity) * (2 / 3);
        }
    }
        // Comprovació per mostrar la variable "cart" per consola.
    // console.log(cart);
}

// Exercise 7
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
function addToCart(id) {

//         // Utilitzo un bucle "for ... in" per recorre l'objecte "products".
//     for (let producte of products){

//         // Comprovació de que el 'id' es igual al de l'arrai.
        
//         if (id === products.indexOf(producte) + 1){
            
//         // Comprovació de que NO existeix el producte a l'array 'cart' utilitzant '!' per a que en cas de que la comparació sigui positiva dongi negatiu i així afegir el producte de la 'cartList' a 'cart' i a més també afegir els apartats 'quantity' amb el valor 1 i 'subtotalWithDiscount' amb valor 0.
//             if (!cart.some(nouPoducte => nouPoducte.name === producte.name)){
//                 cart.push(Object.assign(producte, {quantity: 1, subtotalWithDiscount: 0}));

//         // En cas de que ja existeixi el producte en l'array 'cart' suma 1 al valor de l'apartat 'quantity'.
//             } else {
//                 for (nouProducte of cart){
//                     if (producte.name === nouProducte.name){
//                         nouPoducte.quantity = nouPoducte.quantity + 1;
//                     }
//                 }
//             }
//         }
//     }
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
