```svelte
<script context="module">
  import { products } from '$lib/utils.js';

  export async function load({ params }) {
    const { id } = params;
    const product = products.find((product) => product.id === id);

    if (product) {
      return { props: { product } };
    } else {
      return { status: 404, error: new Error('Not found') };
    }
  }
</script>

<script>
  import { addToCart } from '$lib/utils.js';
  import ProductCard from '$components/ProductCard.svelte';

  export let product;

  function handleAddToCart() {
    addToCart(product);
  }
</script>

<main>
  <ProductCard {product} />
  <button on:click={handleAddToCart}>Add to Cart</button>
</main>
```