<template>
  <div class="cart">
    <h1>Cart</h1>
    <h2 class="cart__empty" v-if="!cartContent.length">Your cart is empty</h2>
    <template v-else>
      <table class="cart-content">
        <CartItem
          v-for="item in cartContent"
          :key="item.product.id"
          :item="item"
        />
      </table>
      <div class="cart__summary">
        <p>Итого товаров: {{ cartQuantity }}</p>
        <p>
          На сумму: {{ cartSum
          }}<CurrencyIcon class="currency-symbol" :size="16" />
        </p>
      </div>
      <button class="btn proceed-to-checkout" @click="proceed">
        Place order
      </button>
    </template>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import CurrencyIcon from 'vue-material-design-icons/CurrencyRub.vue';

export default {
  name: 'Cart',
  components: {
    CartItem,
    CurrencyIcon,
  },
  computed: {
    cartContent() {
      return this.$store.state.cart;
    },
    cartQuantity() {
      return this.$store.getters['getCartQuantity'];
    },
    cartSum() {
      return this.$store.getters['getCartSum'];
    },
  },
  methods: {
    proceed() {
      let checkoutContent = '';
      this.cartContent.forEach((item) => {
        checkoutContent += `${item.product.dish}: ${item.qty}\n`;
      });
      alert(checkoutContent);
    },
  },
};
</script>

<style scoped>
.cart-content {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;
}
.proceed-to-checkout {
  background: green;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
}
</style>
