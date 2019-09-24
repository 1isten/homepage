<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
