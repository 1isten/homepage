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
  font-size: calc(0.75em + 0.25vh);
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000de;
}
</style>
