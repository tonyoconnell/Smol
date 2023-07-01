<script>
  import { onMount } from 'svelte';
  import { products } from '$lib/utils.js';
  import ProductCard from '$components/ProductCard.svelte';
  
  let productList = [];

  onMount(async () => {
    productList = await products();
  });
</script>

<style>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
  }
</style>

<main>
  <div class="product-list">
    {#each productList as product (product.id)}
      <ProductCard {product} />
    {/each}
  </div>
</main>