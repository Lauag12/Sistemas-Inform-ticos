let cart = JSON.parse(localStorage.getItem('restaurant-cart')) || [];

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add')) {
        
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));

        const itemIndex = cart.findIndex(item => item.name === name);

        if (itemIndex > -1) {
            cart[itemIndex].quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        localStorage.setItem('restaurant-cart', JSON.stringify(cart));

        window.location.href = 'carrito.html'; 
    }
});