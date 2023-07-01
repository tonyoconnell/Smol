export function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

export function getProductById(products, id) {
    return products.find(product => product.id === id);
}

export function getCartItemByProductId(cartItems, productId) {
    return cartItems.find(cartItem => cartItem.product.id === productId);
}

export function calculateTotalPrice(cartItems) {
    return cartItems.reduce((total, cartItem) => total + cartItem.product.price * cartItem.quantity, 0);
}

export function displayMessage(messageName) {
    const messages = {
        'product-added': 'Product has been added to the cart.',
        'product-removed': 'Product has been removed from the cart.',
        'checkout-success': 'Checkout successful. Thank you for your purchase!',
        'checkout-failure': 'Checkout failed. Please try again.'
    };

    alert(messages[messageName]);
}