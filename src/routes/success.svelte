<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';

  onMount(() => {
    setTimeout(() => {
      goto('/');
    }, 5000);
  });
</script>

<Header />

<main>
  <h1>Thank you for your purchase!</h1>
  <p>Your transaction was successful. You will be redirected to the homepage in a few seconds...</p>
</main>

<Footer />