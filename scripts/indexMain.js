import { addToCart } from './addToCart.js';
import { showAddedToCartAlert } from './addToCart.js'

$(document).ready(() => {
    const addToCartButtons = document.querySelectorAll('.btn-warning');
    for(let button of addToCartButtons) {
        button.addEventListener('click', (e) => { 
            addToCart(e);
            showAddedToCartAlert();
        });
    }
});

