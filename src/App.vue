<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
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

.btn {
  background: none;
  cursor: pointer;
  border: none;
}
</style>
