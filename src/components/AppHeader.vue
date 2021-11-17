<template>
  <header class="header">
    <nav class="nav">
      <router-link class="header-link" to="/">Catalog</router-link>
      <router-link class="header-link" to="/favorites">Favorites</router-link>
    </nav>
    <nav class="nav">
      <router-link class="header-link" to="/cart"
        >Cart<span class="cart-quantity">{{ cartQuantity }}</span></router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    cartQuantity() {
      return this.$store.getters['getCartQuantity'];
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.header-link {
  position: relative;
  margin-left: 20px;
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
