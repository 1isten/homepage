<template>
  <v-container class="fill-height">
    <v-layout justify-center align-center column wrap>
      <v-flex shrink>
        <v-img
          :src="require('@/assets/280544@1563729391-circle.png')"
          :lazy-src="require('@/assets/280544@1563729391-circle-lazy.png')"
          class="my-3"
          contain
          height="39vh"
          max-height="200"
        ></v-img>
      </v-flex>

      <v-flex shrink>
        <h1 class="display-2 font-weight-bold mt-1 mb-2">
          {{ msg }}
        </h1>
        <p class="subheading font-weight-regular">
          {{ bio }}<br>
          <v-tooltip bottom disabled>
            <template v-slot:activator="{ on }">
              <v-btn class="ma-1" small icon v-on="on" href="https://1isten.github.io/notes" target="_self">
                <v-icon>mdi-file-document-edit-outline</v-icon>
              </v-btn>
            </template>
            <span>My notes</span>
          </v-tooltip>
          <v-tooltip bottom disabled>
            <template v-slot:activator="{ on }">
              <v-btn class="ma-1" small icon v-on="on" href="https://github.com/1isten" target="_blank">
                <v-icon>mdi-github-circle</v-icon>
              </v-btn>
            </template>
            <span>GitHub</span>
          </v-tooltip>
          <v-tooltip bottom disabled>
            <template v-slot:activator="{ on }">
              <v-btn class="ma-1" small icon v-on="on" href="https://twitter.com/1is10" target="_blank">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </template>
            <span>Twitter</span>
          </v-tooltip>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'Hello World',
    bio: "My name is Sten Li, I'm a programmer.",
  }),
};
</script>
