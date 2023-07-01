```svelte
<script>
  import { goto } from '$app/navigation';
</script>

<header>
  <nav>
    <ul>
      <li><a href="/" use:goto>Home</a></li>
      <li><a href="/products" use:goto>Products</a></li>
      <li><a href="/cart" use:goto>Cart</a></li>
      <li><a href="/about" use:goto>About</a></li>
      <li><a href="/contact" use:goto>Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: black;
    color: white;
  }
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  nav ul li a {
    color: white;
    text-decoration: none;
  }
</style>
```