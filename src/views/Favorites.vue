<template>
  <div class="favorites">
    <h1>Favorites</h1>
    <ProductGrid v-if="favoritesList.length" :products="favoritesList" />
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
