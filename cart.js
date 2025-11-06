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
function addProductToCart(obj){
    const productToAdd = products [obj -1] ;
    cart.push(obj);
    console.log(`${obj.name} a été ajouté`);
}

addProductToCart(1);
console.log(cart);

/* étape4 */

// [] //