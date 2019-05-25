// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Donations Stripe
var stripe = Stripe('pk_live_e1426vA2ut4JcUtvhqde23Mu00WNjsII3R ');

var checkoutButton1 = document.getElementById('checkout-button-sku_F7jauZru39kVa7');
checkoutButton1.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_F7jauZru39kVa7', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: 'https://hellogoodbye.app/download',
    cancelUrl: 'https://hellogoodbye.app/canceled',
  })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
});

var checkoutButton3 = document.getElementById('checkout-button-sku_F7jcR9UoUyQLuH');
checkoutButton3.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_F7jcR9UoUyQLuH', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: 'https://hellogoodbye.app/download',
    cancelUrl: 'https://hellogoodbye.app/canceled',
  })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
});

var checkoutButton5 = document.getElementById('checkout-button-sku_F83UXxToMdMbWN');
checkoutButton5.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_F83UXxToMdMbWN', quantity: 1}],

    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: 'https://hellogoodbye.app/download',
    cancelUrl: 'https://hellogoodbye.app/canceled',
  })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
});
