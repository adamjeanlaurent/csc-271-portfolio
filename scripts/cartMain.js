let cartTotalPrice = 0;

const readCart = () => {
    const cart = JSON.parse(localStorage.getItem('sock-cart'));
    if(!cart) return;
    
    for(let item of cart) {
        let price = renderCartItem(item);
        cartTotalPrice += price;
    }

    setCheckoutPrice();
}

const setCheckoutPrice = (priceToSubtract = 0) => {
    const div = document.querySelector('#checkout-price');
    cartTotalPrice -= priceToSubtract;
    div.textContent = `Cart Total: $${cartTotalPrice}`;
}

const removeCartItem = (event) => {
    const specifier = event.target.getAttribute('specifier');
    const item = document.querySelector(`div[specifier='${specifier}']`);
    if(item) {
        // remove item from cart (in DOM)
        item.remove();
        const cart = JSON.parse(localStorage.getItem('sock-cart'));
        
        let found = false;
        
        // update cart with removed item
        const newCart = cart.filter((cartItem) =>{
            if(cartItem.id === specifier && !found) {
                found = true;
                // set new checkout price
                setCheckoutPrice(parseInt(cartItem.price.substring(1,3)));
                return false;
            }
            return true;
        });

        localStorage.setItem('sock-cart', JSON.stringify(newCart));
    }
}

const renderCartItem = (item) => {
    const container = document.querySelector('#containerMargin');

    // create div
    const div = document.createElement('div');
    div.classList.add('alert', 'alert-dark');
    div.setAttribute('role', 'alert');
    div.setAttribute('specifier', item.id);

    // create h4
    const h4 = document.createElement('h4');
    h4.textContent = item.title;
    
    // create image
    const img = document.createElement('img');
    img.setAttribute('src', item.imgPath);
    img.classList.add('alertSock');
    
    // create span
    const span = document.createElement('span');
    span.classList.add('price');
    span.textContent = item.price;
    
    // create button
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-danger', 'rightAlign');
    button.setAttribute('type', 'button');
    button.textContent = 'remove';
    button.setAttribute('specifier', item.id);
    button.addEventListener('click', (event) => removeCartItem(event));

    // append elements
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(button);

    container.prepend(div);

    // return price of sock
    return parseInt(item.price.substring(1,3));
}

$(document).ready(() => {
    readCart();
});