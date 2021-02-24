import { getSocks } from './getSocks';

const addToCardButton = $('#addToCart');

const addToCart = (e) => {
    const itemId = addToCardButton.getAttribute('itemid');
    const sock = getSocks(itemId);
    if(localStorage.getItem('sock-cart')) {
        const cart = JSON.parse(localStorage.getItem('sock-cart'));
        cart.push(sock);
        localStorage.setItem('sock-cart', JSON.stringify(cart));
    }
    else {
        localStorage.setItem('sock-cart', JSON.stringify([sock]));
    }
}

addToCardButton.click((e) => addToCart(e));