<template>
  <div class="cart">
    <h1>Cart</h1>
    <table class="cart-content">
      <CartItem
        v-for="item in cartContent"
        :key="item.product.id"
        :item="item"
      />
    </table>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';

export default {
  name: 'Cart',
  components: {
    CartItem,
  },
  computed: {
    cartContent() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
.cart-content {
  width: 100%;
}
</style>
