<template>
  <div class="favorites">
    <h1>Favorites</h1>
    <h2 v-if="!favoritesList.length">You have not any favorite products</h2>
    <ProductGrid v-else :products="favoritesList" />
  </div>
</template>

<script>
import ProductGrid from '@/components/ProductGrid.vue';

export default {
  name: 'Favorites',
  components: {
    ProductGrid,
  },
  computed: {
    favoritesList() {
      return this.$store.getters['getFavorites'];
    },
  },
};
</script>

<style></style>
