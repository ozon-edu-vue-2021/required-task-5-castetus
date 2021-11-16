<template>
  <div class="product-card">
    <span class="product-card__price">{{ price() }}р.</span>
    <h3 class="product-card__title">{{ product.dish }}</h3>
    <p class="product-card__description">{{ product.description }}</p>
    <span class="product-card__ingredients"
      >Ingredient: {{ product.ingredient }}</span
    >
    <span class="product-card__measurement"
      >Measurement: {{ product.measurement }}</span
    >
    <div class="product-card__actions">
      <button
        class="product-card__add-to-cart-button"
        @click="addToCartHandler"
        v-show="!this.isAdding"
      >
        В корзину
      </button>
      <div class="product-card__quantity" v-show="this.isAdding">
        <button
          class="product-card__quantity-btn product-card__quantity-btn_minus"
          @click="changeQuantity(-1)"
        >
          -
        </button>
        <span class="product-card__quantity-text"
          >{{ currentQuantity }} шт</span
        >
        <button
          class="product-card__quantity-btn product-card__quantity-btn_plus"
          @click="changeQuantity(1)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isAdding: false,
      currentQuantity: 1,
    };
  },
  // computed: {
  //   getCart
  // },
  methods: {
    price() {
      return Math.round(Math.random() * 10000);
    },
    addToCartHandler() {
      if (!this.isAdding) {
        this.isAdding = true;
      }
      this.addToCart(1);
    },
    addToCart(qty) {
      this.$store.commit('ADD_TO_CART', { id: this.product.id, qty });
    },
    changeQuantity(qty) {
      this.currentQuantity += qty;
      this.$store.commit('ADD_TO_CART', { id: this.product.id, qty });
      if (this.currentQuantity < 1) {
        this.currentQuantity = 1;
        this.isAdding = false;
        this.$store.commit('REMOVE_FROM_CART', { id: this.product.id });
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  padding: 20px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-card__add-to-cart-button {
  border-radius: 5px;
  background: blue;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.product-card__quantity {
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-card__quantity-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: blue;
  font-size: 50px;
}
</style>
