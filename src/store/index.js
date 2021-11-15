import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const URL = 'https://random-data-api.com/api/food/random_food?size=30';

export default new Vuex.Store({
  state: {
    goods: [],
  },
  mutations: {
    SET_GOODS(state, goods) {
      state.goods = goods;
    },
  },
  actions: {
    async getGoods({ commit }) {
      try {
        const goods = await fetch(URL, {
          method: 'GET',
        });
        commit('SET_GOODS', goods);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
