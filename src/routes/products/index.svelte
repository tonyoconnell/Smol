<script>
  import { onMount } from 'svelte';
  import ProductCard from '../../components/ProductCard.svelte';
  import { products } from '../../lib/utils.js';

  let productList = [];

  onMount(async () => {
    productList = products;
  });
</script>

<style>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em;
    color: black;
    background-color: white;
  }
</style>

<div class="product-list" id="product-list">
  {#each productList as product (product.id)}
    <ProductCard {product} />
  {/each}
</div>