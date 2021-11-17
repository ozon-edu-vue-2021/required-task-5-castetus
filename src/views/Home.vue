<template>
  <div class="home">
    <h1>Catalog</h1>
    <h2 v-if="!isLoaded">Loading...</h2>
    <ProductGrid :products="goodsList" v-else />
  </div>
</template>

<script>
import ProductGrid from '@/components/ProductGrid.vue';

export default {
  name: 'Home',
  components: {
    ProductGrid,
  },
  computed: {
    goodsList() {
      return this.$store.state.goods;
    },
    isLoaded() {
      return this.$store.state.isLoaded;
    },
  },
};
</script>
