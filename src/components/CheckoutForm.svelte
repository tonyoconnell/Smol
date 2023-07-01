<script>
  import { createEventDispatcher } from 'svelte';
  import { cartItems, totalPrice } from '../lib/store.js';
  import { checkout } from '../lib/stripe.js';

  const dispatch = createEventDispatcher();

  let name = '';
  let email = '';
  let card = '';

  const submitForm = async () => {
    const result = await checkout({ name, email, card });
    if (result.success) {
      dispatch('checkout-success');
    } else {
      dispatch('checkout-failure', { message: result.message });
    }
  };
</script>

<style>
  /* Minimal black and white style */
  .checkout-form {
    background-color: white;
    color: black;
    padding: 20px;
    margin: 20px;
  }
  .checkout-form input {
    margin-bottom: 10px;
  }
  .checkout-form button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
  }
</style>

<div class="checkout-form">
  <h2>Checkout</h2>
  <p>Total: ${totalPrice}</p>
  <input type="text" bind:value={name} placeholder="Name" />
  <input type="email" bind:value={email} placeholder="Email" />
  <input type="text" bind:value={card} placeholder="Card Number" />
  <button on:click={submitForm}>Checkout</button>
</div>