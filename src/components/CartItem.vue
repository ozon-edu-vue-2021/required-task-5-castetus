<template>
  <tr class="cart-item">
    <td class="cart-item__img">
      <div class="cart-item__img-wrapper">
        <img :src="imgSrc" alt="" />
      </div>
    </td>
    <td class="cart-item__content">{{ item.product.dish }}</td>
    <td class="cart-item__summary">
      {{ item.product.price }}р. x {{ item.qty }} = {{ sum
      }}<CurrencyIcon class="currency-symbol" :size="16" />
    </td>
    <td class="cart-item__actions">
      <button class="btn cart-item__remove-btn" @click="remove()">
        <DeleteIcon :size="36" />
      </button>
    </td>
  </tr>
</template>

<script>
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import CurrencyIcon from 'vue-material-design-icons/CurrencyRub.vue';

export default {
  name: 'CartItem',
  components: {
    DeleteIcon,
    CurrencyIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require('../assets/images/1.webp');
    },
    sum() {
      return this.item.product.price * this.item.qty;
    },
  },
  methods: {
    remove() {
      this.$store.commit('REMOVE_FROM_CART', this.item.product.id);
    },
  },
};
</script>

<style scoped>
.cart-item {
  width: 100%;
  padding: 20px;
}
.cart-item td {
  border-bottom: 1px solid #aaa;
  padding: 20px;
}
.cart-item__content {
  text-align: left;
}
.cart-item__img-wrapper {
  display: flex;
  width: 200px;
}
.cart-item__img-wrapper img {
  width: 100%;
  object-fit: cover;
}
</style>
