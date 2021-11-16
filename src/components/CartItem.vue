<template>
  <tr class="cart-item">
    <td class="cart-item__img"></td>
    <td class="cart-item__content">{{ item.product.dish }}</td>
    <td class="cart-item__summary">
      {{ item.product.price }}р. x {{ item.qty }} =
      {{ item.product.price * item.qty }}р.
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

export default {
  name: 'CartItem',
  components: {
    DeleteIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
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
}
.cart-item__content {
  text-align: left;
}
</style>
