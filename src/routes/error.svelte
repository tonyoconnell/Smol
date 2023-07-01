<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    document.title = 'Error - Jewelry Store';
  });
</script>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #000;
    background-color: #fff;
  }
</style>

<main>
  <h1>Oops, something went wrong...</h1>
</main>