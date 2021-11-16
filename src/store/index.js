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
      state.goods = goods;
    },
    ADD_TO_CART(state, params) {
      const existedCartItem = state.cart.find((item) => {
        item.product.id === params.id;
      });
      if (existedCartItem) {
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
      const product = state.goods.find((item) => {
        item.id === params.id;
        console.log(item.id, params.id);
      });
      console.log(product);
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
