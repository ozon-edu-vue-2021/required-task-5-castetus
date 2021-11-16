<template>
  <div id="app">
    <div id="nav">
      <router-link class="header-link" to="/">Каталог</router-link> |
      <router-link class="header-link" to="/cart"
        >Корзина
        <span class="cart-quantity">{{ cartQuantity }}</span></router-link
      >
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      isLoaded: false,
    };
  },
  async created() {
    this.isLoaded = true;
    await this.$store.dispatch('getGoods');
    this.isLoaded = false;
  },
  computed: {
    cartQuantity() {
      return this.$store.getters['getCartQuantity'];
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.header-link {
  position: relative;
}
.cart-quantity {
  color: #fff;
  background: blue;
  border-radius: 50%;
  font-size: 12px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -15px;
}
</style>
