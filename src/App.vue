<template>
  <div id="app"></div>
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
