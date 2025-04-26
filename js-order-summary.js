var summaryDetails = document.getElementById('summaryDetails');

// Retrieve & Display order details
/*
1=> We get the orderDetails from localstorage 
2=> then we parse the json string into into object
 then display it as key-value pairs.
3=> then we append it to the summaryDetails container.
*/
var orderDetails = localStorage.getItem('orderDetails');
if (orderDetails) {
    var parsedDetails = JSON.parse(orderDetails);
    Object.keys(parsedDetails).forEach(key => {
        var p = document.createElement('p');
        p.textContent = `${key}: ${parsedDetails[key]}`;
        summaryDetails.appendChild(p);
    });
}

// Retrieve & Display cart items summary
/**
 * 1=> we get the cart items from localstorage.
 * 2=> then parsed the json string into array.
 * 3=> then foreach item in the array we created a paragraph 
 * to display product name, quantity and total price.
 * 4=> then we append it to the summaryDetails container
 * 5=> .toFixed(2) to format price to two decimal numbers
 */
var cartItems = localStorage.getItem('shoppingCart');
if (cartItems) {
    var cart = JSON.parse(cartItems);
    cart.forEach(item => {
        var p = document.createElement('p');
        p.textContent = `${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
        summaryDetails.appendChild(p);
    });
}
  // Add event listener on clicking to the return button to return to home page
  document.getElementById('returnBtn').addEventListener('click', () => {
    window.location.href = "Home.html";
});
