<template>
  <v-app>
    <v-content>
      <v-container class="fill-height">
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
:root {
  --font-size: calc(0.8em + 0.1vw + 0.1vh);
}

html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: var(--font-size) !important;
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
