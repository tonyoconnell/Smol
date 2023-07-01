```svelte
<script>
  import { onMount } from 'svelte';
  let year;

  onMount(() => {
    year = new Date().getFullYear();
  });
</script>

<footer>
  <div class="footer-content">
    <p>&copy; {year} - Your Jewelry Store</p>
    <p>All rights reserved.</p>
  </div>
</footer>

<style>
  footer {
    background-color: black;
    color: white;
    text-align: center;
    padding: 20px 0;
  }

  .footer-content p {
    margin: 0;
  }
</style>
```