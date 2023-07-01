<script>
  import { addToCart } from '../lib/utils.js';
  export let product;
</script>

<style>
  .product-card {
    border: 1px solid black;
    color: black;
    background-color: white;
    margin: 10px;
    padding: 10px;
  }
  .product-image {
    width: 100%;
  }
  .product-name {
    font-weight: bold;
  }
  .product-description {
    margin-top: 10px;
  }
  .product-price {
    margin-top: 10px;
    font-weight: bold;
  }
  .add-to-cart-button {
    margin-top: 10px;
    background-color: black;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
</style>

<div class="product-card">
  <img class="product-image" src="{product.image}" alt="{product.name}">
  <div class="product-name">{product.name}</div>
  <div class="product-description">{product.description}</div>
  <div class="product-price">${product.price}</div>
  <button class="add-to-cart-button" on:click={() => addToCart(product)}>Add to Cart</button>
</div>