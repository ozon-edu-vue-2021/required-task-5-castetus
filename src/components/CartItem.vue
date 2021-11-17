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
    <td class="cart-item__qty">
      <input type="number" name="" id="" v-model="itemQty" />
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
      return require(`../assets/images/${this.item.product.img}.webp`);
    },
    sum() {
      return this.item.product.price * this.item.qty;
    },
    itemQty: {
      get() {
        return this.$store.getters['getCartItemQty'](this.item.product.id);
      },
      set(val) {
        if (val < 1) {
          this.$store.commit('REMOVE_FROM_CART', this.item.product.id);
          return;
        }
        const params = {
          qty: val,
          id: this.item.product.id,
        };
        this.$store.commit('SET_CART_ITEM_QUANTITY', params);
      },
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
.cart-item__qty input {
  text-align: right;
  width: 40px;
}
</style>
