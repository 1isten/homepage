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
  --background: white;
  --color: #000000de;
}

html,
body {
  width: 100vw;
  height: 100vh;
  background: var(--background);
  font-size: var(--font-size) !important;
  margin: 0;
  border: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

#app {
  width: 100%;
  height: 100%;
  background: var(--background);
  color: var(--color);
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.v-icon {
  color: #5f6368 !important;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: rgb(53, 54, 58);
    --color: rgba(238, 238, 238, 1);
  }

  .v-icon {
    color: #ffffffde !important;
  }
}
</style>
