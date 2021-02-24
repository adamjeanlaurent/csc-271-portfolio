const readCart = () => {
    const cart = JSON.parse(localStorage.getItem('sock-cart'));
    if(!cart) return;

    for(let item of cart) {
        renderCartItem(item);
    }
}

const renderCartItem = (item) => {
    const container = document.querySelector('#containerMargin');

    // create div
    const div = document.createElement('div');
    div.classList.add('alert', 'alert-dark');
    div.setAttribute('role', 'alert');

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

    // append elements
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(button);

    container.appendChild(div);
}

readCart();