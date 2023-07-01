<script>
    import { removeFromCart, updateQuantity } from '../lib/utils.js';

    export let item = {};

    function handleRemove() {
        removeFromCart(item.product.id);
    }

    function handleQuantityChange(event) {
        updateQuantity(item.product.id, event.target.value);
    }
</script>

<style>
    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        border-bottom: 1px solid #000;
    }

    .cart-item img {
        width: 50px;
        height: 50px;
    }

    .cart-item-info {
        display: flex;
        flex-direction: column;
    }

    .cart-item-remove {
        cursor: pointer;
    }
</style>

<div class="cart-item">
    <img src={item.product.image} alt={item.product.name} />
    <div class="cart-item-info">
        <h2>{item.product.name}</h2>
        <p>{item.product.description}</p>
        <p>${item.product.price}</p>
    </div>
    <div>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" min="1" bind:value={item.quantity} on:change={handleQuantityChange} />
    </div>
    <button class="cart-item-remove" on:click={handleRemove}>Remove</button>
</div>