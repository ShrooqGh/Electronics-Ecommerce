/**
 * 1=> creating an array of object(products) to store products in it,
 * each object has properties name, quantity & price.
 * 2=> AddToCart()==> function that take name,price as parameters
 * then creates an object with properties name, price & intitial quantity value =1.
 * 3=> check if product already exists using Array.find().
 * 4=> if exists increment quantity// if not add new product to the cart array.
 * 5=> call the updateCartUI() to update changes on cart items.
 */
var cart = [];

// Show cart function (call this when adding items)
function showCart() {
    document.getElementById('side-cart').classList.add('active');
}

// Close cart function
function closeCart() {
    document.getElementById('side-cart').classList.remove('active');
}

function addToCart(productName, price) {
    var product = { name: productName, price: price, quantity: 1 };
    var existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }
    showCart()
    updateCartUI();
}

/**
 * 1=> select the cart element list name
 * 2=> clears the existing cart to display the current cart array.
 * 3=> calculates the total-price = price*quantity.
 * 4=> add delete button to each item which use decrementItem method.
 * 5=> then we append li to lu list called cart-items.
 */

function updateCartUI() {
    var cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((product, index) => {
        var li = document.createElement('li');
        li.innerHTML = `
            ${product.name} x${product.quantity} = $${product.price * product.quantity}
            <button onclick="decrementItem(${index})">Delete</button>
        `;
        cartItems.appendChild(li);
    });
    // save cart detailes on browser localstorage as json string to show them in the ordersummary later
    //used in the update function to make sure we saved the updated cart.
    localStorage.setItem('shoppingCart',JSON.stringify(cart));
}

/**
 * 
 * @param {*} index of item to decrement
 * if quanity > 1 then decrement
 * if the quantity =1 then delete the item(splice())
 * then call the updateCartUI() function to update changes of items.
 */
function decrementItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCartUI();
}

/**
 * add event listener on checkout button if clicking redirect to place-Order.html page.
 */
document.getElementById('checkout').addEventListener('click', () => {
    window.location.href = 'place-Order.html';
});