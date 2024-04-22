<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Redirect to the home page if the current path is not recognized
    if (this.$route.path !== '/') {
      this.$router.push('/').catch(err => {
        console.error(err);
      });
    }
  }
}
</script>

<style>
/* Styles if necessary */
</style>
