import getSocks  from './getSocks.js';

export const showAddedToCartAlert = (sockPage = false) => {
    const div = document.createElement('div');
    div.classList.add('alert', 'alert-warning');
    div.textContent = 'Sock added to Cart 😇';
    const selector = (sockPage) ? '.col-lg-5' : '#navbar-margin';
    document.querySelector(selector).prepend(div);

    setTimeout(() => {
        div.remove();
    }, 1500);
}

export const addToCart = (e) => {
    const itemId = e.target.getAttribute('itemid');
    if(!itemId) return;
    const sock = getSocks(itemId);
    if(localStorage.getItem('sock-cart') !== null) {
        const cart = JSON.parse(localStorage.getItem('sock-cart'));
        cart.push(sock);
        localStorage.setItem('sock-cart', JSON.stringify(cart));
    }
    else {
        let arr = [];
        arr.push(sock);
        localStorage.setItem('sock-cart', JSON.stringify(arr));
    }
}