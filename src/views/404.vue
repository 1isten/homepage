<template>
  <v-layout justify-center align-center>
    <h1 class="display-1 font-weight-black">
      <router-link
        id="homepage"
        class="secondary--text text--lighten-5"
        :to="{ name: 'home' }"
        replace
      >
        <span style="display: none;">homepage</span>
      </router-link>
    </h1>
  </v-layout>
</template>

<style scoped>
#homepage {
  font-family: 'Roboto Mono', monospace;
  text-decoration: none;
}

#homepage::before {
  content: '_(!';
}

#homepage::after {
  content: '404)_';
}

#homepage:hover {
  color: #000000de !important;
}

#homepage:hover::before {
  content: 'ヾ(¯';
}

#homepage:hover::after {
  content: ')з¯)ﾉﾟ';
}
</style>
