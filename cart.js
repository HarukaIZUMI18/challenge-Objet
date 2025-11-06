/* étap1 */
const products = [ 
    {id: 1, name: "T-shirt", price: 15},
    {id: 2, name: "Pantalon", price: 30},
    {id: 3, name: "Casquette", price: 10},
    {id: 1, name: "Chaussures", price: 50},
];

cart = [];

/*étape2 */
function showProducts(){
    console.log("Liste des produits disponibles :");
for(const i of products){
    console.log(`${products.id}. ${products.name}- ${products.price}€`);
}
}

showProducts();

/* étape3 */
function addProductToCart(index) {
  let productToAdd = products[index - 1];

  cart.push(productToAdd);
  console.log(productToAdd.name + " a été ajouté!");
}
addProductToCart(1);
console.log(cart);

/* étape4 */

function showCart(){
    console.log("Produits dans le panier :");
    let nbLine = 1;
    let total = 0;
    for (const product of cart) {
        console.log(`${nbLine}. ${product.name} - ${product.price}€`);
        total += product.price;
        nbLine++;
    }
    console.log(`total : ${total}€`);
}
showCart(1);
console.log(cart);

/* étape5 */
monTableau = [
    { titre: "chaussure" },  // index 0
    { titre: "chapeau" },    // index 1
    { titre: "bikini" },     // index 2 
    { titre: "parasol" }     // index 3
];

function removeProductFromCart(){
const index = lineNumber -1;

if(index<0 || index >= cart.length){
    return;
}
console.log(cart);
}
const remove = monTableau.splice(2, 1);

console.log(monTableau);
removeProductFromCart();
