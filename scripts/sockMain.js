import { addToCart, showAddedToCartAlert } from './addToCart.js';

$(document).ready(() => {
    const addToCardButton = document.getElementById('addToCart');
    addToCardButton.addEventListener('click', (e) => {
        addToCart(e);
        showAddedToCartAlert(true);
    });
});