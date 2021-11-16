<template>
  <div class="home">
    <ProductGrid :products="goodsList" />
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
  },
};
</script>
