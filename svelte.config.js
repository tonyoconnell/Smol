const config = {
  kit: {
    target: '#svelte',
    adapter: '@sveltejs/adapter-vercel',
    vite: {
      ssr: {
        noExternal: ['svelte', 'svelte/kit']
      }
    }
  }
};

export default config;