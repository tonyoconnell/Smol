<script>
  import { cartItems, totalPrice } from '$lib/utils.js';
  import CheckoutForm from '$components/CheckoutForm.svelte';
  import { onMount } from 'svelte';

  let stripe;
  onMount(async () => {
    stripe = await Stripe('your-stripe-publishable-key');
  });

  const checkout = async () => {
    const session = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cartItems })
    }).then(res => res.json());

    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };
</script>

<style>
  /* Minimal black and white style */
  body {
    background-color: white;
    color: black;
  }
</style>

<main>
  <h1>Checkout</h1>
  <CheckoutForm {cartItems} {totalPrice} on:submit={checkout} />
</main>