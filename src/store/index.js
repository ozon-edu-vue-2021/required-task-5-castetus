import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const URL = 'https://random-data-api.com/api/food/random_food?size=30';

export default new Vuex.Store({
  state: {
    goods: [],
    cart: [],
  },
  mutations: {
    SET_GOODS(state, goods) {
      goods.forEach(
        (product) => (
          (product.isFavorite = false),
          (product.price = Math.round(Math.random() * 10000)),
          (product.img = toString(Math.round(Math.random() * 12)))
        )
      );
      state.goods = goods;
    },
    ADD_TO_CART(state, params) {
      const findItem = (item) => {
        return item.product.id === params.id;
      };
      const existedCartItem = state.cart.find(findItem);
      if (existedCartItem) {
        console.log('1');
        existedCartItem.qty += params.qty;
      } else {
        const product = state.goods.find((product) => product.id === params.id);
        const cartItem = {
          product,
          qty: params.qty,
        };
        state.cart.push(cartItem);
      }
    },
    REMOVE_FROM_CART(state, id) {
      const removingProductIndex = state.cart.findIndex(
        (item) => item.product.id === id
      );
      if (removingProductIndex !== -1) {
        state.cart.splice(removingProductIndex, 1);
      }
    },
    SET_FAVORITE(state, params) {
      const findItem = (item) => {
        return item.id === params.id;
      };
      const product = state.goods.find(findItem);
      if (product) {
        product.isFavorite = params.value;
      }
    },
  },
  actions: {
    async getGoods({ commit }) {
      try {
        const response = await fetch(URL, {
          method: 'GET',
        });
        const result = await response.json();
        commit('SET_GOODS', result);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getCartQuantity(state) {
      let sum = 0;
      state.cart.forEach((item) => (sum += item.qty));
      return sum;
    },
    getFavorites(state) {
      return state.goods.filter((product) => product.isFavorite);
    },
  },
});
