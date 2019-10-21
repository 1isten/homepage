<template>
  <v-container class="fill-height">
    <v-layout justify-center align-center>
      <h1 class="display-2 font-weight-bold">
        <router-link id="homepage" class="secondary--text text--lighten-4" :to="{ name: 'home' }" replace>
          _(*404)ﾉ
        </router-link>
      </h1>
    </v-layout>
  </v-container>
</template>

<style scoped>
#homepage {
  text-decoration: none;
}

#homepage:hover {
  color: #000000de !important;
}
</style>
