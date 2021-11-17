<template>
  <div class="product-card">
    <img class="product-card__img" :src="imgSrc" alt="" />
    <button
      @click="isFavorite = !isFavorite"
      class="btn product-card__fav-btn"
      :class="{ btn_active: isFavorite }"
    >
      <HeartIcon :size="48" />
    </button>
    <span class="product-card__price"
      >{{ product.price }}<CurrencyIcon class="currency-symbol" :size="16"
    /></span>
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
        class="btn product-card__add-to-cart-button"
        @click="addToCartHandler"
        v-show="!this.isAdding"
      >
        В корзину
      </button>
      <div class="product-card__quantity" v-show="this.isAdding">
        <button
          class="
            btn
            product-card__quantity-btn product-card__quantity-btn_minus
          "
          @click="changeQuantity(-1)"
        >
          <MinusIcon :size="36" />
        </button>
        <span class="product-card__quantity-text">{{ currentQuantity }}</span>
        <button
          class="btn product-card__quantity-btn product-card__quantity-btn_plus"
          @click="changeQuantity(1)"
        >
          <PlusIcon :size="36" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PlusIcon from 'vue-material-design-icons/Plus.vue';
import MinusIcon from 'vue-material-design-icons/Minus.vue';
import HeartIcon from 'vue-material-design-icons/Heart.vue';
import CurrencyIcon from 'vue-material-design-icons/CurrencyRub.vue';

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    PlusIcon,
    MinusIcon,
    HeartIcon,
    CurrencyIcon,
  },
  data() {
    return {
      price: 0,
      isAdding: false,
      currentQuantity: 1,
    };
  },
  computed: {
    isFavorite: {
      get() {
        return !!this.product.isFavorite;
      },
      set(value) {
        this.$store.commit('SET_FAVORITE', { id: this.product.id, value });
      },
    },
    imgSrc() {
      return require('../assets/images/1.webp');
    },
  },
  methods: {
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
  position: relative;
}
.product-card__add-to-cart-button {
  border-radius: 5px;
  background: blue;
  color: #fff;
  padding: 10px;
  cursor: pointer;
}
.product-card__quantity {
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-card__quantity-btn {
  cursor: pointer;
  color: blue;
  font-size: 50px;
}
.product-card__fav-btn {
  color: grey;
  position: absolute;
  top: -18px;
  right: -16px;
}
.product-card__img {
  object-fit: cover;
  width: 100%;
}
.btn_active {
  color: blue;
}
</style>
