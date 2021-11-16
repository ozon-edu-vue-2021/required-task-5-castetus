<template>
  <div class="about">
    <h1>Cart</h1>
    <div class="cart-content">
      <CartItem v-for="item in cartContent" :key="item.product.id" />
    </div>
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
