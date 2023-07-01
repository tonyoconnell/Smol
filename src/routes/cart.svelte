<script>
  import { cartItems, totalPrice } from '$lib/utils.js';
  import CartItem from '$components/CartItem.svelte';
</script>

<style>
  .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }

  .total {
    font-size: 1.5em;
    margin-top: 1em;
  }
</style>

<div class="cart">
  <h1>Your Cart</h1>
  {#each $cartItems as item (item.product.id)}
    <CartItem {item} />
  {/each}
  <div class="total">Total: ${$totalPrice}</div>
  <a href="/checkout">Proceed to Checkout</a>
</div>