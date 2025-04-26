//Form submmition
/**
 * 1=> select the form element.
 * 2=> add event on submitting the form.
 * 3=> e.preventDefault() ==> is used here to do action(which is storing data) of the form 
 * by stoping the browser from performing the default action (submitting the form) to not
 * lose data. 
 * 4=> FormData() -- collecting all form inputs and their values from
 * the submmited form -- e.target is the form itself.
 * 5=> Object.fromEntries(formData.entries()) to covert the Form entries 
 * which is represented into (key - value) pairs to javascript object.
 * 6=> then store it as json string in the browser localstorage in the 
 * name of orderDetails.
 */
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    // then redirect to (order-summary.html) page after submitting
    localStorage.setItem('orderDetails', JSON.stringify(Object.fromEntries(formData.entries())));
    window.location.href = 'order-summary.html';
});

// Show/hide payment info based on selected payment method
/**
 * 1=> we select the paymentMethod element & each element in the divs.
 * 2=> we add eventListener on change(selectig) from options.
 * 3=> adding display 'none' to hide them all at begging.
 * 4=> depending on the choosen payment method we display 
 * change 'none' to 'block' to make it visible and display its info
 */
var paymentMethodSelect = document.getElementById('paymentMethod');
var creditCardInfo = document.getElementById('creditCardInfo');
var paypalInfo = document.getElementById('paypalInfo');
var bankTransferInfo = document.getElementById('bankTransferInfo');

paymentMethodSelect.addEventListener('change', function() {
    creditCardInfo.style.display = 'none';
    paypalInfo.style.display = 'none';
    bankTransferInfo.style.display = 'none';

    if (this.value === 'creditCard') {
        creditCardInfo.style.display = 'block';
    } else if (this.value === 'paypal') {
        paypalInfo.style.display = 'block';
    } else if (this.value === 'bankTransfer') {
        bankTransferInfo.style.display = 'block';
    }
});